interface Instruction {
  command: string;
  args: string[];
}

export const getLevelId = (instructions: Instruction[]) => {
  return parseInt(instructions[0].args[0]);
};

export const getInstructions = (commands: string) => {
  const lines: string[] = commands.split("\n");
  const instructions: Instruction[] = [];

  for (const line of lines) {
    const match = line.trim().match(/([a-z]+)\((.*)\)/i);
    if (match) {
      const command = match[1];
      const args = match[2].split(",").map(arg => arg.trim());
      instructions.push({ command, args });
    }
  }

  return instructions;
};
