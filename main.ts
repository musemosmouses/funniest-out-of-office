// The Funniest Out-of-Office — one original line.
// The setup is an ordinary OOO ("out until Monday"); the twist is
// that the auto-reply was set by the manager — and the sender
// is, in fact, sitting at their desk, confessing inside the lie.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I'm out of office until Monday. This auto-reply was set by my manager. I am, in fact, at my desk.";

// One line, one auto-reply: the kit gate only accepts 1 to 140 characters,
// counted as code points, so the check below mirrors it exactly.
// Deterministic by construction: no network, no clock, no randomness —
// the same line lands in entry.txt on every run, byte for byte.
const charCount = [...ENTRY].length;
if (charCount < 1 || charCount > 140) {
  throw new Error(`out-of-office entry must be 1-140 characters, got ${charCount}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });
const entryPath = join(outDir, "entry.txt");
writeFileSync(entryPath, ENTRY, "utf8");
console.log(`wrote out-of-office entry to ${entryPath} (${charCount} characters)`);
