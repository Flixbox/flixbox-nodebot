const fs = require("fs");
const path = require("path");

export const level1Commands = fs.readFileSync(
  path.resolve(__dirname, "./level1.txt"),
  "utf8"
);
