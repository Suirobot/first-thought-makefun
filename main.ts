// One Word, First Thought — entrypoint.
// Writes exactly one word (at most 24 characters): the first that
// comes to mind, picked for surprise and vividness.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE = "Kerfuffle";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
