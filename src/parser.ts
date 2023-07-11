interface Instruction {
  command: string;
  args: string[];
}

export const getLevelId = (instructions: Instruction[]) => {
  return parseInt(instructions[0].args[0]);
};

// Actually 100% implemented by Bing AI.
export const getInstructions = (commands: string) => {
  const lines: string[] = commands.split("\n");
  const instructions: Instruction[] = [];
  const repeatStack: { count: number; start: number }[] = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const match = line.trim().match(/([a-z]+)\((.*)\)/i);
    if (match) {
      const command = match[1];
      const args = match[2].split(",").map(arg => arg.trim());
      if (command === "repeat") {
        repeatStack.push({
          count: Number(args[0]),
          start: instructions.length,
        });
      } else {
        instructions.push({ command, args });
      }
    } else if (line.trim() === "}") {
      const repeat = repeatStack.pop();
      if (repeat) {
        const repeatedInstructions = instructions.slice(repeat.start);
        for (let j = 1; j < repeat.count; j++) {
          instructions.push(...repeatedInstructions);
        }
      }
    }
  }

  return instructions;
};
