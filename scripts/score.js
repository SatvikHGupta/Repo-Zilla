import fs from "fs";

const repos = JSON.parse(fs.readFileSync("repos_raw.json", "utf-8"));

// ------- project type detection -------
function detectProjectType(repo) {
  const topics = repo.topics.map(t => t.toLowerCase());
  const desc = (repo.description || "").toLowerCase();
  const lang = (repo.language || "").toLowerCase();

  // frontend frameworks
  if (topics.includes("react") || topics.includes("vite") || topics.includes("vue") ||
      topics.includes("angular") || topics.includes("svelte") || topics.includes("nextjs") ||
      topics.includes("nuxt")) {
    if (topics.includes("backend") || topics.includes("api") || topics.includes("server") ||
        topics.includes("express") || topics.includes("fastapi") || topics.includes("django"))
      return "Fullstack";
    return "Frontend";
  }

  // fullstack indicators
  if (topics.includes("fullstack") || topics.includes("full-stack") ||
      topics.includes("mern") || topics.includes("mean") || topics.includes("mevn") ||
      (topics.includes("nodejs") && topics.includes("react")))
    return "Fullstack";

  // backend
  if (topics.includes("api") || topics.includes("rest-api") || topics.includes("graphql") ||
      topics.includes("microservices") || topics.includes("server") ||
      topics.includes("express") || topics.includes("fastapi") || topics.includes("django") ||
      topics.includes("spring") || topics.includes("gin") || topics.includes("fiber") ||
      lang === "go" || lang === "rust" || lang === "java") {
    if (!topics.includes("frontend") && !topics.includes("react"))
      return "Backend";
  }

  // ai / ml
  if (topics.includes("machine-learning") || topics.includes("deep-learning") ||
      topics.includes("llm") || topics.includes("ai") || topics.includes("nlp") ||
      topics.includes("computer-vision") || topics.includes("openai") ||
      topics.includes("langchain") || topics.includes("generative-ai") ||
      topics.includes("chatgpt") || topics.includes("neural-network") ||
      desc.includes("machine learning") || desc.includes("deep learning") ||
      desc.includes("language model") || desc.includes("neural"))
    return "AI/ML";

  // devops / infra
  if (topics.includes("docker") || topics.includes("kubernetes") || topics.includes("k8s") ||
      topics.includes("devops") || topics.includes("ci-cd") || topics.includes("terraform") ||
      topics.includes("ansible") || topics.includes("monitoring") || topics.includes("helm") ||
      lang === "dockerfile" || lang === "shell")
    return "DevOps";

  // database
  if (topics.includes("database") || topics.includes("mongodb") || topics.includes("postgresql") ||
      topics.includes("redis") || topics.includes("mysql") || topics.includes("orm") ||
      topics.includes("migration") || desc.includes("database") || desc.includes(" orm "))
    return "Database";

  // auth / security
  if (topics.includes("authentication") || topics.includes("oauth") || topics.includes("jwt") ||
      topics.includes("security") || topics.includes("encryption") || topics.includes("auth") ||
      desc.includes("authentication") || desc.includes("authorization"))
    return "Auth/Security";

  // mobile
  if (topics.includes("android") || topics.includes("ios") || topics.includes("react-native") ||
      topics.includes("flutter") || topics.includes("mobile") || lang === "dart" ||
      topics.includes("kotlin") || topics.includes("swift"))
    return "Mobile";

  // cli / tools / utilities
  if (topics.includes("cli") || topics.includes("command-line") || topics.includes("terminal") ||
      topics.includes("tool") || topics.includes("utility") || topics.includes("automation") ||
      topics.includes("script") || lang === "shell")
    return "CLI/Tools";

  // learning / docs
  if (topics.includes("awesome") || topics.includes("roadmap") || topics.includes("tutorial") ||
      topics.includes("interview") || topics.includes("learning") || topics.includes("education") ||
      topics.includes("cheatsheet") || topics.includes("resources") ||
      desc.includes("awesome list") || desc.includes("collection of") ||
      desc.includes("curated list"))
    return "Learning/Docs";

  // css / ui libs
  if (topics.includes("css") || topics.includes("tailwind") || topics.includes("ui-components") ||
      topics.includes("design-system") || topics.includes("component-library") ||
      topics.includes("icons") || topics.includes("animation"))
    return "UI/CSS";

  // boilerplate / starter
  if (topics.includes("boilerplate") || topics.includes("starter") || topics.includes("template") ||
      topics.includes("scaffold") || topics.includes("starter-template"))
    return "Boilerplate";

  // language based fallback
  if (lang === "python") return "Python/General";
  if (lang === "javascript" || lang === "typescript") return "JS/General";
  if (lang === "c++" || lang === "c") return "Systems";
  if (lang === "java") return "Java/General";
  if (lang === "rust") return "Rust/General";
  if (lang === "go") return "Go/General";

  return "Other";
}

// ------- category detection -------
function detectCategory(repo) {
  const type = repo.project_type;
  const topics = repo.topics.map(t => t.toLowerCase());
  const lang = (repo.language || "").toLowerCase();

  if (type === "Frontend") {
    if (topics.includes("react") || topics.includes("nextjs")) return "React Ecosystem";
    if (topics.includes("vue") || topics.includes("nuxt")) return "Vue Ecosystem";
    if (topics.includes("angular")) return "Angular Ecosystem";
    if (topics.includes("svelte")) return "Svelte";
    return "Frontend General";
  }

  if (type === "Backend") {
    if (lang === "javascript" || lang === "typescript") return "Node/Express";
    if (lang === "python") return "Python Backend";
    if (lang === "go") return "Go Backend";
    if (lang === "java") return "Java Backend";
    if (lang === "rust") return "Rust Backend";
    return "Backend General";
  }

  if (type === "AI/ML") {
    if (topics.includes("llm") || topics.includes("openai") || topics.includes("langchain") ||
        topics.includes("chatgpt") || topics.includes("generative-ai")) return "LLM/GenAI";
    if (topics.includes("computer-vision")) return "Computer Vision";
    if (topics.includes("nlp")) return "NLP";
    return "ML/General";
  }

  if (type === "DevOps") {
    if (topics.includes("kubernetes") || topics.includes("k8s")) return "Kubernetes";
    if (topics.includes("docker")) return "Docker";
    if (topics.includes("terraform") || topics.includes("ansible")) return "IaC";
    if (topics.includes("ci-cd")) return "CI/CD";
    return "DevOps General";
  }

  return type;
}

// ------- roadmap relevance score -------
function roadmapScore(repo) {
  const topics = repo.topics.map(t => t.toLowerCase());
  const lang = (repo.language || "").toLowerCase();
  let score = 0;

  // current focus - MERN
  const mernTopics = ["react", "nodejs", "express", "mongodb", "mern", "javascript", "typescript", "vite", "nextjs", "mongoose"];
  mernTopics.forEach(t => { if (topics.includes(t)) score += 15; });
  if (lang === "javascript" || lang === "typescript") score += 10;

  // near future - MEAN + DevOps
  const meanTopics = ["angular", "mean"];
  meanTopics.forEach(t => { if (topics.includes(t)) score += 8; });
  const devopsTopics = ["docker", "kubernetes", "ci-cd", "devops", "terraform", "nginx"];
  devopsTopics.forEach(t => { if (topics.includes(t)) score += 6; });

  // always relevant - AI tooling
  const aiTopics = ["llm", "openai", "ai", "langchain", "generative-ai", "chatgpt"];
  aiTopics.forEach(t => { if (topics.includes(t)) score += 5; });

  return Math.min(score, 100); // cap at 100
}

// ------- quality check for layer 0 → 1 -------
function isVerified(repo) {
  const hasDesc = repo.description && repo.description.length > 15;
  const hasLang = repo.language && repo.language !== "Unknown";
  const hasTopics = repo.topics.length > 0;
  const hasStars = repo.stars >= 100;
  const notJunk = repo.project_type !== "Other";

  // must pass at least 3 of 5
  const score = [hasDesc, hasLang, hasTopics, hasStars, notJunk].filter(Boolean).length;
  return score >= 3;
}

// ------- main scoring -------
function calculateScore(repo) {
  const starScore = Math.log(Math.max(repo.stars, 1)) * 0.40;
  const forkScore = Math.log(Math.max(repo.forks, 1)) * 0.25;

  const now = Date.now();
  const lastCommit = new Date(repo.last_commit).getTime();
  const monthsAgo = (now - lastCommit) / (1000 * 60 * 60 * 24 * 30);
  const recencyScore = monthsAgo < 3 ? 1.0 : monthsAgo < 6 ? 0.8 :
                       monthsAgo < 12 ? 0.6 : monthsAgo < 24 ? 0.3 : 0.1;

  const descScore = repo.description.length > 50 ? 0.15 : repo.description.length > 20 ? 0.08 : 0;
  const topicScore = Math.min(repo.topics.length * 0.02, 0.15);
  const roadmap = roadmapScore(repo) / 100 * 0.20;

  return (starScore + forkScore) * (0.65) +
         recencyScore * 0.20 +
         descScore +
         topicScore +
         roadmap;
}

// ------- run everything -------
console.log(`processing ${repos.length} repos...`);

// assign project type + category + score to every repo
repos.forEach(repo => {
  repo.project_type = detectProjectType(repo);
  repo.category = detectCategory(repo);
  repo.score = parseFloat(calculateScore(repo).toFixed(4));
  repo.verified = isVerified(repo);
});

// sort by score
repos.sort((a, b) => b.score - a.score);

// layer assignment
const layer1 = repos.filter(r => r.verified).slice(0, 9000);
const layer1Ids = new Set(layer1.map(r => r.full_name));

const layer2 = layer1.slice(0, 2000);
const layer2Ids = new Set(layer2.map(r => r.full_name));

const layer3 = layer2
  .filter(r => ["React Ecosystem", "Node/Express", "Frontend General",
                "Fullstack", "LLM/GenAI", "Boilerplate"].includes(r.category))
  .slice(0, 250);
const layer3Ids = new Set(layer3.map(r => r.full_name));

// tag every repo with its layer
repos.forEach(repo => {
  if (layer3Ids.has(repo.full_name)) repo.layer = 3;
  else if (layer2Ids.has(repo.full_name)) repo.layer = 2;
  else if (layer1Ids.has(repo.full_name)) repo.layer = 1;
  else repo.layer = 0;
});

// stats
const layerCounts = [0,1,2,3].map(l => repos.filter(r => r.layer === l).length);
console.log(`\nlayer breakdown:`);
console.log(`  layer 0 (full pool):   ${layerCounts[0]}`);
console.log(`  layer 1 (verified):    ${layerCounts[1]}`);
console.log(`  layer 2 (pinned):      ${layerCounts[2]}`);
console.log(`  layer 3 (active shelf):${layerCounts[3]}`);

// project type breakdown
const types = {};
repos.forEach(r => types[r.project_type] = (types[r.project_type] || 0) + 1);
console.log(`\nproject types:`);
Object.entries(types).sort((a,b) => b[1]-a[1]).forEach(([k,v]) => console.log(`  ${k}: ${v}`));

// save
fs.writeFileSync("repos_scored.json", JSON.stringify(repos, null, 2));
console.log(`\nsaved to repos_scored.json`);