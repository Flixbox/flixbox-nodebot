import { describe, expect, it } from "vitest";
import { solve } from "../src/level-solver";

const fs = require("fs");
const path = require("path");

const level1Commands = fs.readFileSync(
  path.resolve(__dirname, "./level1.txt"),
  "utf8"
);

describe("level-solver", () => {
  it("play the game right", () => {
    console.log(level1Commands);
    expect(solve(level1Commands)).toEqual(1);
  });
});
