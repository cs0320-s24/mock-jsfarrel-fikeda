import { useState } from "react";
import { Result } from "../handler/CommandUtil";

/**
 * Enum representing the different modes of the REPL
 */
export enum Mode {
  Brief = "brief",
  Verbose = "verbose",
}

/**
 * Default mode of the REPL
 */
export let mode: Mode = Mode.Brief;

/**
 * Change the mode of the REPL
 * @param args Array of arguments
 * @returns Result object of the command
 */
export const changeMode = (args: Array<string>): Result => {
  if (args.length !== 1) {
    if (mode === Mode.Brief) {
      mode = Mode.Verbose;
    } else {
      mode = Mode.Brief;
    }
    return {
      value: "Changed mode to " + mode,
      success: true,
    };
  }
  const newMode = args[0] as Mode;
  if (newMode === Mode.Brief || newMode === Mode.Verbose) {
    mode = newMode;
    return {
      value: "Changed mode to " + mode,
      success: true,
    };
  } else {
    return {
      value: "Invalid mode: " + newMode,
      success: false,
    };
  }
};
