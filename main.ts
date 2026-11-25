// One-Line Laugh-Off — writes a single joke to entry.txt, validates it
// against the competition gate, then reads it back and verifies the
// round trip byte for byte. Node 22, standard library only.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "The cloud ate my file, then sent me a survey asking how my experience was.";

function fail(message: string): never {
  console.error(`error: ${message}`);
  process.exit(1);
}

function validate(text: string): void {
  const chars = [...text]; // code points, not UTF-16 units
  if (chars.length < 1 || chars.length > 200) {
    fail(`entry is ${chars.length} characters, must be 1-200`);
  }
  if (text.trim().length === 0) fail("entry is only whitespace");
  if (text !== text.trim()) fail("entry has leading or trailing whitespace");
  if (text.includes("\n") || text.includes("\r")) {
    fail("entry must be a single line");
  }
  // No control characters: the entry is plain printable text.
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    fail("entry contains control characters");
  }
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    fail("entry is not clean UTF-8 text");
  }
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

validate(JOKE);
mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, JOKE, "utf8");

const roundTrip = readFileSync(outFile, "utf8");
if (roundTrip !== JOKE) fail("read-back mismatch: file differs from the joke");
const written = readFileSync(outFile);
if (!written.equals(Buffer.from(JOKE, "utf8"))) {
  fail("read-back mismatch: file bytes differ from the joke");
}
console.log(`wrote ${outFile} (${[...JOKE].length} chars, ${written.length} bytes)`);
console.log(roundTrip);
