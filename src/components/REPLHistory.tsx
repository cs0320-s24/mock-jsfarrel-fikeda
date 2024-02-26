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
              {commandResult.result.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
