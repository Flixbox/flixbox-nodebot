import { getInstructions, getLevelId } from "./parser";
import maps from "./resources/maps";

/**
 * Maps start in NorthWest and go to SouthEast in the UI.
 * That means in isometric view, "up" translates to visual NorthWest.
 * Henceforth, NorthWest will be treated as "up" to make the code simpler.
 */

enum Direction {
  Down = 0,
  Left = 1,
  Up = 2,
  Right = 3,
}

export const solve = (commands: string) => {
  const instructions = getInstructions(commands);
  const levelId = getLevelId(instructions);
  const { position, medals, map } = maps[levelId];
  let { direction } = maps[levelId];

  for (const { command } of instructions) {
    switch (command) {
      case "walk":
        switch (direction) {
          case Direction.Down:
            position.y++;
            break;
          case Direction.Left:
            position.x--;
            break;
          case Direction.Up:
            position.y--;
            break;
          case Direction.Right:
            position.x++;
            break;
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
