import fetch from "node-fetch";
import fs from "fs";
import dotenv from "dotenv";
dotenv.config();

const TOKEN = process.env.GITHUB_TOKEN;
const CHECKPOINT_FILE = "checkpoint.json";
const OUTPUT_FILE = "repos_raw.json";
const DELAY_BETWEEN_REQUESTS = 2500; // 2.5s between calls - well under rate limit
const DELAY_ON_RATE_LIMIT = 65000;   // 65s pause if rate limited
const TARGET = 100000;

// all query buckets - spreads across languages, topics, star ranges
// so we get diverse results not just top 100 JS repos
const QUERIES = [
  // javascript
  "language:javascript stars:500..2000 pushed:>2023-01-01",
  "language:javascript stars:2000..10000 pushed:>2023-01-01",
  "language:javascript stars:>10000 pushed:>2022-01-01",
  "language:javascript topic:react stars:>200 pushed:>2023-01-01",
  "language:javascript topic:nodejs stars:>200 pushed:>2023-01-01",
  "language:javascript topic:express stars:>100 pushed:>2023-01-01",

  // typescript
  "language:typescript stars:500..2000 pushed:>2023-01-01",
  "language:typescript stars:>2000 pushed:>2023-01-01",
  "language:typescript topic:react stars:>200 pushed:>2023-01-01",
  "language:typescript topic:nextjs stars:>200 pushed:>2023-01-01",

  // python
  "language:python stars:500..2000 pushed:>2023-01-01",
  "language:python stars:2000..10000 pushed:>2023-01-01",
  "language:python stars:>10000 pushed:>2022-01-01",
  "language:python topic:machine-learning stars:>200 pushed:>2023-01-01",
  "language:python topic:fastapi stars:>100 pushed:>2023-01-01",
  "language:python topic:django stars:>100 pushed:>2023-01-01",

  // go
  "language:go stars:500..2000 pushed:>2023-01-01",
  "language:go stars:>2000 pushed:>2023-01-01",
  "language:go topic:devops stars:>100 pushed:>2023-01-01",

  // rust
  "language:rust stars:500..2000 pushed:>2023-01-01",
  "language:rust stars:>2000 pushed:>2023-01-01",

  // java
  "language:java stars:500..2000 pushed:>2023-01-01",
  "language:java stars:>2000 pushed:>2023-01-01",
  "language:java topic:spring stars:>100 pushed:>2023-01-01",

  // devops / infra
  "language:shell stars:>200 pushed:>2023-01-01",
  "language:dockerfile stars:>200 pushed:>2023-01-01",
  "topic:kubernetes stars:>200 pushed:>2023-01-01",
  "topic:docker stars:>300 pushed:>2023-01-01",
  "topic:ci-cd stars:>100 pushed:>2023-01-01",
  "topic:terraform stars:>200 pushed:>2023-01-01",

  // ai / llm tooling
  "topic:llm stars:>200 pushed:>2023-01-01",
  "topic:openai stars:>200 pushed:>2023-01-01",
  "topic:langchain stars:>100 pushed:>2023-01-01",
  "topic:generative-ai stars:>100 pushed:>2023-01-01",
  "topic:chatgpt stars:>200 pushed:>2023-01-01",

  // databases
  "topic:mongodb stars:>100 pushed:>2023-01-01",
  "topic:postgresql stars:>100 pushed:>2023-01-01",
  "topic:redis stars:>200 pushed:>2023-01-01",
  "topic:orm stars:>100 pushed:>2023-01-01",

  // auth / security
  "topic:authentication stars:>100 pushed:>2023-01-01",
  "topic:oauth stars:>100 pushed:>2023-01-01",
  "topic:jwt stars:>100 pushed:>2023-01-01",

  // css / ui
  "topic:tailwindcss stars:>200 pushed:>2023-01-01",
  "topic:css stars:>300 pushed:>2023-01-01",
  "topic:ui-components stars:>200 pushed:>2023-01-01",

  // learning / roadmaps
  "topic:roadmap stars:>500 pushed:>2022-01-01",
  "topic:awesome stars:>500 pushed:>2022-01-01",
  "topic:tutorial stars:>300 pushed:>2023-01-01",
  "topic:interview stars:>300 pushed:>2022-01-01",

  // fullstack / boilerplates
  "topic:boilerplate stars:>200 pushed:>2023-01-01",
  "topic:starter-template stars:>100 pushed:>2023-01-01",
  "topic:mern stars:>100 pushed:>2022-01-01",
  "topic:mean stars:>50 pushed:>2022-01-01",

  // mobile
  "topic:react-native stars:>200 pushed:>2023-01-01",
  "topic:flutter stars:>300 pushed:>2023-01-01",

  // c / c++ / systems
  "language:c stars:>500 pushed:>2023-01-01",
  "language:c++ stars:>500 pushed:>2023-01-01",
];

// safe delay helper
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// load checkpoint if exists
function loadCheckpoint() {
  if (fs.existsSync(CHECKPOINT_FILE)) {
    const data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, "utf-8"));
    console.log(`resuming from checkpoint - ${data.repos.length} repos already fetched`);
    return data;
  }
  return { repos: [], completedQueries: [], queryIndex: 0, page: 1 };
}

// save checkpoint
function saveCheckpoint(state) {
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(state, null, 2));
}

// save final output
function saveOutput(repos) {
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(repos, null, 2));
  console.log(`saved ${repos.length} repos to ${OUTPUT_FILE}`);
}

// check remaining rate limit
async function checkRateLimit() {
  const res = await fetch("https://api.github.com/rate_limit", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });
  const data = await res.json();
  return data.resources.search;
}

// fetch one page of search results
async function fetchPage(query, page) {
  const url = `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=100&page=${page}&sort=stars&order=desc`;

  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  // rate limited
  if (res.status === 403 || res.status === 429) {
    console.log(`rate limited - waiting 65 seconds...`);
    await sleep(DELAY_ON_RATE_LIMIT);
    return null; // caller will retry
  }

  if (!res.ok) {
    console.log(`error ${res.status} on query "${query}" page ${page}`);
    return null;
  }

  return res.json();
}

// normalize repo object - only keep what we need
function normalizeRepo(repo) {
  return {
    id: repo.id,
    name: repo.name,
    full_name: repo.full_name,
    owner: repo.owner.login,
    description: repo.description || "",
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    language: repo.language || "Unknown",
    topics: repo.topics || [],
    last_commit: repo.pushed_at,
    created_at: repo.created_at,
    size: repo.size,
    open_issues: repo.open_issues_count,
    license: repo.license ? repo.license.spdx_id : null,
    default_branch: repo.default_branch,
    // scoring fields - calculated after
    score: 0,
    pinned: false,
    shelf: false,
    // catalogue fields - filled later
    category: "",
    subcategory: "",
    project_type: "",
    summary: "",
    tags: [],
  };
}

// main runner
async function main() {
  if (!TOKEN) {
    console.error("no GITHUB_TOKEN found in .env - stopping");
    process.exit(1);
  }

  console.log("checking rate limit before starting...");
  const rateLimit = await checkRateLimit();
  console.log(`search requests remaining: ${rateLimit.remaining} / ${rateLimit.limit}`);
  console.log(`resets at: ${new Date(rateLimit.reset * 1000).toLocaleTimeString()}`);

  const state = loadCheckpoint();
  const seen = new Set(state.repos.map((r) => r.full_name)); // dedup tracker

  for (let qi = state.queryIndex; qi < QUERIES.length; qi++) {
    const query = QUERIES[qi];

    if (state.completedQueries.includes(query)) {
      console.log(`skipping completed query: ${query}`);
      continue;
    }

    console.log(`\nquery ${qi + 1}/${QUERIES.length}: ${query}`);

    let page = qi === state.queryIndex ? state.page : 1;
    let queryDone = false;

    while (!queryDone) {
      if (state.repos.length >= TARGET) {
        console.log(`reached target of ${TARGET} repos`);
        queryDone = true;
        break;
      }

      console.log(`  page ${page}...`);

      // check rate limit every page
      const rl = await checkRateLimit();
      if (rl.remaining < 5) {
        const waitMs = (rl.reset * 1000 - Date.now()) + 5000;
        console.log(`rate limit low (${rl.remaining} left) - waiting ${Math.ceil(waitMs / 1000)}s`);
        await sleep(waitMs);
      }

      const result = await fetchPage(query, page);

      if (!result) {
        // was rate limited, retry same page
        console.log(`retrying page ${page}...`);
        await sleep(DELAY_ON_RATE_LIMIT);
        continue;
      }

      if (!result.items || result.items.length === 0) {
        console.log(`  no more results for this query`);
        queryDone = true;
        break;
      }

      let added = 0;
      for (const repo of result.items) {
        if (!seen.has(repo.full_name)) {
          seen.add(repo.full_name);
          state.repos.push(normalizeRepo(repo));
          added++;
        }
      }

      console.log(`  added ${added} new repos (total: ${state.repos.length})`);

      // github search api caps at page 10 (1000 results per query)
      if (page >= 10 || result.items.length < 100) {
        queryDone = true;
      }

      // save checkpoint every page
      state.queryIndex = qi;
      state.page = page + 1;
      saveCheckpoint(state);

      page++;
      await sleep(DELAY_BETWEEN_REQUESTS);
    }

    state.completedQueries.push(query);
    state.queryIndex = qi + 1;
    state.page = 1;
    saveCheckpoint(state);

    if (state.repos.length >= TARGET) break;
  }

  console.log(`\ndone - total unique repos: ${state.repos.length}`);
  saveOutput(state.repos);
  console.log("you can now delete checkpoint.json");
}

main().catch((err) => {
  console.error("fatal error:", err);
  process.exit(1);
});