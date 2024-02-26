import { Result } from "../handler/CommandUtil";

export function readBackArgs(args: string[]): Result {
  return {
    value: args.join(" ") + " ",
    success: true,
  };
}
