import "../styles/main.css";
import { CommandResult } from "../commands/handler/CommandUtil";

interface REPLHistoryProps {
  commandResults: CommandResult[];
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.commandResults.map((commandResult, index) => {
        return (
          <div key={index} className="repl-history-item">
            <span className="repl-history-item-command">
              <b>{commandResult.command.name}:</b>&nbsp;
            </span>
            <span className="repl-history-item-result">
              {renderResult(commandResult.result.value)}
            </span>
          </div>
        );
      })}
    </div>

  );

  function renderResult(value: String | String[][]): JSX.Element {
    if (typeof value === "string") {
      return <span>{value}</span>;
    } else if (Array.isArray(value) && Array.isArray(value[0])) {
      return renderTable(value);
    } else {
      return <span>{value}</span>;
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
