import { getInstructions, getLevelId } from "../src/parser";
import { describe, expect, it } from "vitest";
import { level1Commands } from "./commands";

describe("parser", () => {
  it("gets the level id right", () => {
    expect(getLevelId(getInstructions(level1Commands))).toEqual(1);
  });

  it("gets the level instructions right", () => {
    const instructions = getInstructions(level1Commands);
    expect(instructions[1]).toEqual({ command: "walk", args: [""] });
    expect(instructions[5]).toEqual({ command: "light", args: [""] });
  });
});
