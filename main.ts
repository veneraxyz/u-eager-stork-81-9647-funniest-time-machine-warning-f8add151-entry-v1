import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "WARNING: Do not shake hands with your great-grandfather — it voids the warranty, your insurance, and your existence.";

if (!line || line.includes("\n") || line.length > 120) {
  console.error("Invalid entry line");
  process.exit(1);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
