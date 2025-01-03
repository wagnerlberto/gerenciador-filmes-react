import "./style.css";

export function Filmcard(props) {
  return (
    <div className="filmcard">
      <h2 className="filmcard-title">{props.title}</h2>
      <div className="filmcard-content">
        <div>
          <div><b>Diretor:</b> {props.director}</div>
          <div><b>Elenco:</b> {props.cast}</div>
        </div>
        <div className="filmcard-grade">{props.grade}</div>
      </div>

    </div>
  );
}
