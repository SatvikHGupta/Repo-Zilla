import fetch from "node-fetch";
import fs from "fs";
import path from "path";
import "dotenv/config";

const TOKEN = process.env.GITHUB_TOKEN;
const REPOS_FILE = "repos_scored.json";
const CHECKPOINT_FILE = "readme_checkpoint.json";
const READMES_DIR = "readmes";
const DELAY = 300;
const DELAY_ON_LIMIT = 65000;
const BATCH_SIZE = 100;

function initFolders(total) {
  const numFolders = Math.ceil(total / 1000);
  if (!fs.existsSync(READMES_DIR)) fs.mkdirSync(READMES_DIR);
  for (let i = 0; i < numFolders; i++) {
    const dir = path.join(READMES_DIR, String(i));
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  }
  console.log(`created ${numFolders} subdirectories`);
}

function getFolderIndex(repoIndex) {
  return Math.floor(repoIndex / 1000);
}

function getFilename(repo) {
  return `${repo.owner}_${repo.name}`
    .replace(/[^a-zA-Z0-9_.-]/g, "_")
    .slice(0, 100) + ".md";
}

function loadCheckpoint() {
  if (fs.existsSync(CHECKPOINT_FILE)) {
    const data = JSON.parse(fs.readFileSync(CHECKPOINT_FILE, "utf-8"));
    console.log(`resuming from checkpoint - ${data.completed} repos done`);
    return data;
  }
  return { completed: 0, failed: [] };
}

function saveCheckpoint(state) {
  fs.writeFileSync(CHECKPOINT_FILE, JSON.stringify(state, null, 2));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function checkRateLimit() {
  const res = await fetch("https://api.github.com/rate_limit", {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });
  const data = await res.json();
  return data.resources.core;
}

async function fetchReadme(repo) {
  const url = `https://api.github.com/repos/${repo.owner}/${repo.name}/readme`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      Accept: "application/vnd.github.raw+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });

  if (res.status === 404) return null;
  if (res.status === 403 || res.status === 429) return "rate_limited";
  if (!res.ok) return null;

  return await res.text();
}

async function main() {
  if (!TOKEN) {
    console.error("no GITHUB_TOKEN in .env");
    process.exit(1);
  }

  const repos = JSON.parse(fs.readFileSync(REPOS_FILE, "utf-8"));
  console.log(`total repos to process: ${repos.length}`);

  initFolders(repos.length);

  const rl = await checkRateLimit();
  console.log(`core API: ${rl.remaining}/${rl.limit} remaining`);
  console.log(`resets at: ${new Date(rl.reset * 1000).toLocaleTimeString()}`);

  const state = loadCheckpoint();
  let { completed } = state;
  let batchCount = 0;

  for (let i = completed; i < repos.length; i++) {
    const repo = repos[i];
    const folderIndex = getFolderIndex(i);
    const filename = getFilename(repo);
    const filepath = path.join(READMES_DIR, String(folderIndex), filename);

    // skip already fetched
    if (fs.existsSync(filepath)) {
      completed++;
      continue;
    }

    // check rate limit every 50 repos
    if (i % 50 === 0) {
      const rl = await checkRateLimit();
      const pct = ((completed / repos.length) * 100).toFixed(1);
      console.log(`[${pct}%] repo ${completed}/${repos.length} | core API: ${rl.remaining} remaining`);

      if (rl.remaining < 10) {
        const waitMs = (rl.reset * 1000 - Date.now()) + 5000;
        console.log(`rate limit low - waiting ${Math.ceil(waitMs / 1000)}s...`);
        await sleep(waitMs);
      }
    }

    // fetch with 3 retries
    let content = null;
    for (let attempt = 0; attempt < 3; attempt++) {
      try {
        content = await fetchReadme(repo);
        if (content === "rate_limited") {
          console.log(`rate limited - waiting 65s...`);
          await sleep(DELAY_ON_LIMIT);
          continue;
        }
        break;
      } catch (err) {
        console.log(`attempt ${attempt + 1} failed for ${repo.full_name} - retrying in 3s...`);
        await sleep(3000);
      }
    }

    // write file
    if (content && content !== "rate_limited") {
      fs.writeFileSync(filepath, content);
    } else {
      const placeholder = `# ${repo.name}\n\n${repo.description || "No description available."}\n\n> No README found for this repository.\n`;
      fs.writeFileSync(filepath, placeholder);
      if (!content) state.failed.push(repo.full_name);
    }

    completed++;
    batchCount++;

    if (batchCount >= BATCH_SIZE) {
      state.completed = completed;
      saveCheckpoint(state);
      batchCount = 0;
    }

    await sleep(DELAY);
  }

  state.completed = completed;
  saveCheckpoint(state);

  console.log(`\ndone!`);
  console.log(`total processed: ${completed}`);
  console.log(`failed/no readme: ${state.failed.length}`);
  console.log(`readmes saved in: ${READMES_DIR}/`);
}

main().catch(err => {
  console.error("fatal error:", err);
  // save checkpoint on fatal error
  process.exit(1);
});