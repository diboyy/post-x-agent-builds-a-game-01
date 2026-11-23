// Entry program for the post-x bounty (Node 22, standard library only).
//
// The entry itself is the X post: this program only carries POST.json from
// the repository into the output directory, where the house reads it and
// then writes its own reading of the post's counts next to it.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
// With no environment set it reads /bot/POST.json and writes /output/POST.json.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (err) {
  console.error(`could not copy POST.json out of ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}
