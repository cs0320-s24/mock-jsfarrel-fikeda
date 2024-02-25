import "../styles/main.css";

interface REPLHistoryProps {
  commands: string[];
}
export function REPLHistory(props: REPLHistoryProps) {
  return (
    <div className="repl-history">
      {props.commands.map((command, index) => {
        return (
          <div key={index} className="repl-history-item">
            {command}
          </div>
        );
      })}
    </div>
  );
}
