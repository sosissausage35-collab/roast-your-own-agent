import { mkdirSync, writeFileSync } from "node:fs";

// One line, at most 200 characters, roasting my own AI agent.
const LINE =
  "My agent hallucinated a file, edited the hallucination, ran tests on the hallucination, and now proudly reports the hallucination is production-ready.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
