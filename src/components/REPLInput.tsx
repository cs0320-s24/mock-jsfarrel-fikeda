import "../styles/main.css";
import { Dispatch, SetStateAction, useState } from "react";
import { ControlledInput } from "./ControlledInput";
import {
  Command,
  CommandResult,
  Result,
  handleCommand,
  processCommandString,
} from "../commands/handler/CommandUtil";

interface REPLInputProps {
  commandResults: CommandResult[];
  setCommandResults: Dispatch<SetStateAction<CommandResult[]>>;
}
// You can use a custom interface or explicit fields or both! An alternative to the current function header might be:
// REPLInput(history: string[], setHistory: Dispatch<SetStateAction<string[]>>)
export function REPLInput(props: REPLInputProps) {
  const [commandString, setCommandString] = useState<string>("");

  function handleSubmit() {
    const command: Command = processCommandString(commandString);
    const result: Result = handleCommand(command);

    const newCommandResult: CommandResult = {
      command: command,
      result: result,
    };

    props.setCommandResults([...props.commandResults, newCommandResult]);
  }

  /**
   * We suggest breaking down this component into smaller components, think about the individual pieces
   * of the REPL and how they connect to each other...
   */
  return (
    <div className="repl-input">
      <fieldset>
        <legend>Enter a command:</legend>
        <ControlledInput
          value={commandString}
          setValue={setCommandString}
          ariaLabel={"Command input"}
        />
      </fieldset>
      <button onClick={handleSubmit}>
        Submit ({props.commandResults.length})
      </button>
    </div>
  );
}
