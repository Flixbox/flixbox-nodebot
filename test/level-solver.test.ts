import { describe, expect, it } from "vitest";
import { solve } from "../src/level-solver";
import { level1Commands } from "./commands";

describe("level-solver", () => {
  it("play the game right", () => {
    expect(solve(level1Commands)).toEqual(1);
  });
});
