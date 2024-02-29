import { commandMap } from "./CommandMap";

/**
 * A result of a command
 */
export interface Result {
  value: String | String[][];
  success: boolean;
}

/**
 * A commmand specified by the user
 */
export interface Command {
  name: string;
  args: string[];
}

/**
 * Result of running a command, used for REPL history
 */
export interface CommandResult {
  command: Command;
  result: Result;
}

/**
 * Process a command string into Command object
 * @param commandString String of unprocessed command
 * @returns Command (name of command and arguments)
 */
export function processCommandString(commandString: string): Command {
  const [name, ...args] = commandString.split(" ");
  return {
    name,
    args,
  };
}

/**
 * Handle command and return its result.
 * Tries to fetch command from commandMap.
 * If it finds it, it tries to execute it.
 * If there's an error during execution, it returns a Result error.
 * If it doesn't fidn the command it returns a Result error.
 * @param command Command object to be handled
 * @returns Result of command
 */
export function handleCommand(command: Command): Result {
  const commandFunction = commandMap[command.name];

  if (commandFunction) {
    try {
      return commandFunction(command.args);
    } catch (e) {
      return {
        value: `Failed to execute command: ${command.name}`,
        success: false,
      };
    }
  } else {
    return {
      value: `Command not found: ${command.name}`,
      success: false,
    };
  }
}
