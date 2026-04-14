import fs from "fs";
import path from "path";

const repos = JSON.parse(fs.readFileSync("repos_scored.json", "utf-8"));

// output dir
const outDir = "public/data";
if (!fs.existsSync("public")) fs.mkdirSync("public");
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

// split by layer
const layers = { 0: [], 1: [], 2: [], 3: [] };
repos.forEach(r => layers[r.layer].push(r));

// save each layer
Object.entries(layers).forEach(([layer, data]) => {
  const file = path.join(outDir, `layer${layer}.json`);
  fs.writeFileSync(file, JSON.stringify(data));
  console.log(`layer${layer}.json - ${data.length} repos - ${(fs.statSync(file).size / 1024 / 1024).toFixed(2)}MB`);
});

// save a stats file for the loading screen
const stats = {
  total: repos.length,
  layers: {
    0: layers[0].length,
    1: layers[1].length,
    2: layers[2].length,
    3: layers[3].length,
  },
  languages: {},
  projectTypes: {},
  categories: {},
  generated: new Date().toISOString(),
};

repos.forEach(r => {
  stats.languages[r.language] = (stats.languages[r.language] || 0) + 1;
  stats.projectTypes[r.project_type] = (stats.projectTypes[r.project_type] || 0) + 1;
  stats.categories[r.category] = (stats.categories[r.category] || 0) + 1;
});

fs.writeFileSync(path.join(outDir, "stats.json"), JSON.stringify(stats, null, 2));
console.log(`stats.json saved`);
console.log(`\ndone - files ready in public/data/`);