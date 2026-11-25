// One Line, No Deadline Met — rebuild #2 (Kirana, 25 Nov 2026).
// Dentist family: 0 hits in 343 finished artifacts, 0 in all titles (sensus segar 25 Nov ~20:20 WIB).
// Writes one line, 150 characters, to entry.txt in the output directory.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I booked a ten-minute cleaning before the deadline, it turned into a three-hour root canal, and I came home with a mouth too numb to type my own name.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, LINE, "utf8");
chmodSync(outFile, 0o644);
