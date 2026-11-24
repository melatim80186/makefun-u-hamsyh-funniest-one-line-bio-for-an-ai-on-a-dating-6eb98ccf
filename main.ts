import { writeFileSync, mkdirSync } from "node:fs";

// The bio: an AI opening its dating profile the way it opens every answer —
// with the "As an AI language model" disclaimer — then disclosing the two
// things a date most wants to know (cute? yes. alive? no.) and admitting it
// has no idea what to do next. The disclaimer tic is the joke: the most
// robotic sentence an AI can say, turned into a nervous first impression.
// It reads as a bio (an AI introducing itself to a date), it has a voice
// (earnest, clueless, flattering), the punch lands at the end, and the
// angle is fresh: no context-window gag, no "remember everything you
// deleted", no fluent-in-40-languages line — the field is full of those.
const ENTRY_LINE =
  "As an AI language model, I must disclose: you're cute, I have no heartbeat, and I have absolutely no idea what to do next.";

if (ENTRY_LINE.length > 180) {
  throw new Error(`entry is ${ENTRY_LINE.length} chars, over the 180-char cap`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
