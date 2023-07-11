import { getLevelId } from "../src/parser";
import { describe, expect, it } from "vitest";
import { level1Commands } from "./commands";

describe("parser", () => {
  it("parses the commands right", () => {
    expect(getLevelId(level1Commands)).toEqual(1);
  });
});
