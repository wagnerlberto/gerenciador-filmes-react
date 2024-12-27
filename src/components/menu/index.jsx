import { Link } from "react-router-dom";
import "./style.css";

export function Menu() {
  return (
    <div className="menu">
      <nav>
        <span className="menu"><Link href="#" className="menu">HOME</Link></span>
        <span className="menu"><Link href="#" className="menu">FILMES</Link></span>
        <span className="menu"><Link href="#" className="menu">DIRETORES</Link></span>
        <span className="menu"><Link href="#" className="menu">ATORES</Link></span>
      </nav>
    </div>
  );
}
