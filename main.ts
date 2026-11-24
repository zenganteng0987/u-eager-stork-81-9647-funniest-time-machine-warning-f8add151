// SPDX-License-Identifier: MIT
// Entry: a deadpan safety notice about meeting your duplicate self.
// The punch lands on the last words, telling the reader they may be the unreal one.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "WARNING: If you encounter yourself, do not panic. Only one of you is real, and it is not the one reading this.";

const outputPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, ENTRY, "utf8");
