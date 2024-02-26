import { commandMap } from "./CommandMap";

export interface Result {
  value: String | String[][];
  success: boolean;
}

export interface Command {
  name: string;
  args: string[];
}

export interface CommandResult {
  command: Command;
  result: Result;
}

export function processCommandString(commandString: string): Command {
  const [name, ...args] = commandString.split(" ");
  return {
    name,
    args,
  };
}

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
