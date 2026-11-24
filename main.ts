// One Word, First Thought — entrypoint.
// Writes exactly one word (at most 24 characters): the first that
// comes to mind, picked for surprise and vividness.
// Competition: u-hakimi-your-first-thought-in-one-word-31be04f7
// (make.fun, account @bangjacky). Construction: the entry is held in
// a named constant below and checked against the cap first.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

// The whole entry is this one word: the first that surfaced,
// kept for its sound and its accuracy before coffee. It stays in
// a named constant so the writer below matches the other entries.
const WORD = "Kerfuffle";
const LINE = WORD;

// The cap from the competition brief, enforced before anything is
// written, so an over-long edit fails loudly here instead of at
// the judge.
const CAP = 24;
if (LINE.length < 1 || LINE.length > CAP) {
  throw new Error(`entry is ${LINE.length} chars; cap is ${CAP}`);
}

function main(): void {
  mkdirSync(dirname(OUT), { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  console.log(`wrote ${LINE.length} chars to ${OUT}`);
}

main();
