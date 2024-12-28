import { Link } from "react-router-dom";
import "./style.css";

export function Menu() {
  return (
    <div className="menu">
      <nav>
        <span className="menu">
          <Link to="/" className="menu">HOME</Link>
        </span>
        <span className="menu">
          <Link to="/filmes" className="menu">FILMES</Link>
        </span>
        <span className="menu">
          <Link to="/diretores" className="menu">DIRETORES</Link>
        </span>
        <span className="menu">
          <Link to="/atores" className="menu">ATORES</Link>
        </span>
      </nav>
    </div>
  );
}
