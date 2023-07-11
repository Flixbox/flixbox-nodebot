const fs = require("fs");
const path = require("path");

export function getTextFileContent(fileName) {
  return fs.readFileSync(path.resolve(__dirname, fileName), "utf8");
}

export const level1Commands = getTextFileContent("./level1.txt");
export const level3Commands = getTextFileContent("./level3.txt");
