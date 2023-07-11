import { getInstructions, getLevelId } from "./parser";
import maps from "./resources/maps";

/**
 * Maps start in NorthWest and go to SouthEast in the UI.
 * That means in isometric view, "up" translates to visual NorthWest.
 * Henceforth, NorthWest will be treated as "up" to make the code simpler.
 */

enum Direction {
  Down = 0,
  Right = 1,
  Up = 2,
  Left = 3,
}

export const solve = (commands: string) => {
  const instructions = getInstructions(commands);
  const levelId = getLevelId(instructions);
  const { position, medals, map } = maps[levelId];
  let { direction } = maps[levelId];

  for (const { command } of instructions) {
    console.log("position", position);
    switch (command) {
      case "walk":
        if (direction === Direction.Down) {
          position.y++;
        } else if (direction === Direction.Right) {
          position.x++;
        } else if (direction === Direction.Up) {
          position.y--;
        } else if (direction === Direction.Left) {
          position.x--;
        }
        break;
      case "left":
        direction = (direction + 3) % 4;
        break;
      case "right":
        direction = (direction + 1) % 4;
        break;
      case "light":
        console.log("light");
        break;
      case "jump":
        console.log("jump");
        break;
    }
  }

  console.log(`Level ${levelId} not solved.`);
  return 0;
};
