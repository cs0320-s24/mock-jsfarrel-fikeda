import { Result } from "../handler/CommandUtil";

/**
 * REPL function to echo arguments. Simple for testing.
 * @param args arguments to command
 * @returns Result of concatenated args
 */
export function readBackArgs(args: string[]): Result {
  return {
    value: args.join(" ") + " ",
    success: true,
  };
}
