// Warning Label for Humans: One Line, Big Laugh — make.fun entry.
// Writes one line (at most 160 characters) to /output/entry.txt: a
// safety warning label that should come printed on every human
// being. WARNING: This human contains no off switch. Do not
// operate before coffee. Side effects include opinions,
// unsolicited advice, and naps.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "WARNING: This human contains no off switch. Do not operate before coffee. Side effects include opinions, unsolicited advice, and naps.";

// Gate guard: the entry must be 1–160 characters and not only whitespace.
if (entry.length < 1 || entry.length > 160 || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
