import { copyFileSync, mkdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const src = join(root, "node_modules", "three", "build", "three.module.js");
const destDir = join(root, "vendor");
const dest = join(destDir, "three.module.js");

if (!existsSync(src)) {
  console.error("Khong thay three.module.js. Hay chay npm install trong thu muc game.");
  process.exit(1);
}

mkdirSync(destDir, { recursive: true });
copyFileSync(src, dest);
console.log("Da copy Three.js vao vendor/three.module.js");
