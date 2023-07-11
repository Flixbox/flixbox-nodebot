export const getLevelId = (commands: string) => {
  const results = commands.match(/robot\((\d+)\)/);
  if (!results) throw new Error("No level id found");
  return parseInt(results[1]);
};
