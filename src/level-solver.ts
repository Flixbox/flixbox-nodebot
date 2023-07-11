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

enum TileType {
  Empty = "b",
  Light = "l",
}

export const solve = (commands: string) => {
  const instructions = getInstructions(commands);
  const levelId = getLevelId(instructions);

  const { position, medals, map } = maps[levelId];
  let { direction } = maps[levelId];
  let litTiles = 0;

  console.log(position);

  for (const { command } of instructions) {
    console.log(position.y);
    // TODO y too high
    const robotLocationInMap = map[position.y][position.x];
    switch (command) {
      case "walk":
        switch (direction) {
          case Direction.Down:
            console.log("walking down");
            position.y++;
            break;
          case Direction.Left:
            console.log("walking left");
            position.x--;
            break;
          case Direction.Up:
            console.log("walking up");
            position.y--;
            break;
          case Direction.Right:
            console.log("walking right");
            position.x++;
            break;
        }
        break;
      case "left":
        console.log("turning left");
        direction = (direction + 3) % 4;
        break;
      case "right":
        console.log("turning right");
        direction = (direction + 1) % 4;
        break;
      case "light":
        if (robotLocationInMap.t === TileType.Light) {
          console.log("lighting");
          litTiles++;
        } else {
          throw new Error("Robot is trying to light a non-light tile");
        }
        break;
      case "jump":
        console.log("jump");
        break;
    }

    if (
      position.y < 0 ||
      position.y >= map.length ||
      position.x < 0 ||
      position.x >= map[0].length
    ) {
      throw new Error("Robot is out of bounds");
    }
  }

  let lights = 0;
  for (const row of map) {
    for (const tile of row) {
      if (tile.t === "l") {
        lights++;
      }
    }
  }

  if (litTiles !== lights) {
    console.log(
      `Level ${levelId} not solved. Not enough light tiles lit. Expected ${lights}, got ${litTiles}.`
    );
    return 0;
  }

  console.log(`Level ${levelId} solved successfully.`);
  return 1;
};
