import { getLevelId } from "./parser";
import maps from "./resources/maps";

export const solve = (commands: string) => {
  const levelId = getLevelId(commands);

  console.log("Level 1 not solved.");
  return 0;
};
