import { loadFile, searchFile, viewFile, clearCSV } from "../defintitions/CSVCommands";
import { readBackArgs } from "../defintitions/EchoCommand";
import { changeMode } from "../defintitions/ModeCommand";
import { Result } from "./CommandUtil";

/**
 * A command-processor function for our REPL. The function returns a string, which is the value to print to history when
 * the command is done executing.
 *
 * The arguments passed in the input (which need not be named "args") should
 * *NOT* contain the command-name prefix.
 */
export interface REPLFunction {
  (args: Array<string>): Result;
}

/**
 * A map of command names to their REPLFunctions
 */
export interface CommandMap {
  [key: string]: REPLFunction;
}

/**
 * A map of commands used for the REPL
 */
export const commandMap: CommandMap = {
  echo: readBackArgs,
  mode: changeMode,
  search: searchFile,
  load: loadFile,
  view: viewFile,
  clear: clearCSV
};
