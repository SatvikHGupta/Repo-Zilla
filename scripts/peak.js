import fs from "fs";

const repos = JSON.parse(fs.readFileSync("repos_raw.json", "utf-8"));

// language breakdown
const langs = {};
repos.forEach(r => langs[r.language] = (langs[r.language] || 0) + 1);

// category breakdown via topics
const topics = {};
repos.forEach(r => r.topics.forEach(t => topics[t] = (topics[t] || 0) + 1));

// star ranges
const ranges = { "50-200": 0, "200-1k": 0, "1k-5k": 0, "5k-20k": 0, "20k+": 0 };
repos.forEach(r => {
  if (r.stars < 200) ranges["50-200"]++;
  else if (r.stars < 1000) ranges["200-1k"]++;
  else if (r.stars < 5000) ranges["1k-5k"]++;
  else if (r.stars < 20000) ranges["5k-20k"]++;
  else ranges["20k+"]++;
});

console.log(`total repos: ${repos.length}`);
console.log("\n--- languages ---");
Object.entries(langs).sort((a,b) => b[1]-a[1]).slice(0,15).forEach(([k,v]) => console.log(`  ${k}: ${v}`));
console.log("\n--- star ranges ---");
Object.entries(ranges).forEach(([k,v]) => console.log(`  ${k}: ${v}`));
console.log("\n--- top 20 topics ---");
Object.entries(topics).sort((a,b) => b[1]-a[1]).slice(0,20).forEach(([k,v]) => console.log(`  ${k}: ${v}`));