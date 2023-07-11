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
    // Loop 1
    expect(instructions[6]).toEqual({ command: "left", args: [""] });
    expect(instructions[7]).toEqual({ command: "walk", args: [""] });
    expect(instructions[11]).toEqual({ command: "light", args: [""] });
    // Loop 2
    expect(instructions[12]).toEqual({ command: "left", args: [""] });
    expect(instructions[13]).toEqual({ command: "walk", args: [""] });
    expect(instructions[17]).toEqual({ command: "light", args: [""] });
  });
});
