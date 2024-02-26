import { loadFile, searchFile, readBackArgs, viewFile } from "../defintitions/CSVCommands";

/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when
 * the command is done executing.
 *
 * The arguments passed in the input (which need not be named "args") should
 * *NOT* contain the command-name prefix.
 */
export interface REPLFunction {
  (args: Array<string>): String | String[][];
}

export interface CommandMap {
  [key: string]: REPLFunction;
}

export const commandMap: CommandMap = {
  echo: readBackArgs,
  search: searchFile,
  load: loadFile,
  view: viewFile 
};
