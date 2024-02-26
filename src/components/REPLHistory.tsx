import "../styles/main.css";
import { CommandResult } from "../commands/handler/CommandUtil";
import { Mode, mode } from "../commands/defintitions/ModeCommand";

interface REPLHistoryProps {
  commandResults: CommandResult[];
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.commandResults.map((commandResult, index) => {
        return (
          <div key={index} className="repl-history-item">
            <div
              className={
                mode == Mode.Verbose
                  ? "repl-history-item-command"
                  : "repl-history-item-command-hidden"
              }
            >
              Command: {commandResult.command.name}&nbsp;
              <i>{commandResult.command.args.join(" ")}</i>
            </div>
            <div
              className={
                commandResult.result.success
                  ? "repl-history-item-result"
                  : "repl-history-item-result-error"
              }
            >
              {mode == Mode.Verbose && "Output: "}
              {renderResult(commandResult.result.value)}
            </div>
          </div>
        );
      })}
    </div>
  );

  function renderResult(value: String | String[][]): JSX.Element {
    if (Array.isArray(value) && Array.isArray(value[0])) {
      return renderTable(value);
    } else {
      return <span>{value}&nbsp;</span>;
    }
  }

  function renderTable(data: String[][]): JSX.Element {
    const tableRows = data.map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td key={cellIndex}>{cell}</td>
        ))}
      </tr>
    ));
    return <table>{tableRows}</table>;
  }
}
