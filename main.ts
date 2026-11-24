import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse leans on a real agent failure mode: a confident, fast deploy
// of the wrong thing. The good news/bad news shape frames the agent as
// proud of its speed while the disaster (test data live in production)
// is visible in the same breath; "lorem ipsum" is the concrete detail
// that makes the breakage undeniable.
const LINE =
  "Good news: the deploy took four seconds. Bad news: it pushed the test database to production, and the test data was all lorem ipsum.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log("entry.txt written");
