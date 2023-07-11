import { getInstructions, getLevelId } from "./parser";
import maps from "./resources/maps";

export const solve = (commands: string) => {
  const instructions = getInstructions(commands);
  const levelId = getLevelId(instructions);

  console.log(instructions);

  console.log("Level 1 not solved.");
  return 0;
};
