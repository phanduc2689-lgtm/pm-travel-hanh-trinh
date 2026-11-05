import { copyFileSync, mkdirSync, existsSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const gameDir = join(root, "game");
const chunks = readdirSync(gameDir)
  .filter((name) => /^chunk-\d+\.txt$/.test(name))
  .sort();
if (chunks.length !== 13) {
  console.error("Thieu manh game. Can 13 file game/chunk-00.txt ... chunk-12.txt, thay", chunks.length);
  process.exit(1);
}
const html = chunks
  .map((name) => readFileSync(join(gameDir, name), "utf8").replace(/\r/g, ""))
  .join("");
const bytes = Buffer.from(html, "utf8");
if (bytes.length !== 113577) {
  console.error("index.html sai kich thuoc:", bytes.length, "(can 113577).");
  process.exit(1);
}
writeFileSync(join(root, "index.html"), bytes);
console.log("Da ghep index.html (" + bytes.length + " byte, " + chunks.length + " manh).");

const src = join(root, "node_modules", "three", "build", "three.module.js");
if (!existsSync(src)) {
  console.error("Khong thay three.module.js. Hay chay npm install trong thu muc game.");
  process.exit(1);
}
const destDir = join(root, "vendor");
mkdirSync(destDir, { recursive: true });
copyFileSync(src, join(destDir, "three.module.js"));
console.log("Da copy Three.js vao vendor/three.module.js");
