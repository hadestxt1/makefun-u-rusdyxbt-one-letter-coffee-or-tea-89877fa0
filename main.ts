import { mkdirSync, writeFileSync } from "node:fs";

// One Letter: Coffee or Tea — the entry is exactly one letter, A for coffee.
// A stands for coffee: the morning fuel, picked over tea.
// Deterministic and model-free: no network, no clock, no randomness.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", "A", "utf8");
