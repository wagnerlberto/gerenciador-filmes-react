import "./style.css";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

export function Home() {
  return (
    <div className="content">
      <h1>HOME</h1>
      <div className="home-form">
        <h3 className="home-form">Inserir novo filme:</h3>
        <p className="home-form">
          <input type="text" placeholder="Nome do filme" className="home-form" size="40"/>
        </p>
        <p className="home-form">
          <input type="text" placeholder="Nome do diretor" className="home-form" size="40" />
        </p>
        <p className="home-form">
          <input type="number" placeholder="Nota do filme" className="home-form" size="10" />
        </p>
        <h3 className="home-form">Elenco:</h3>
        <p className="home-form">
          <div>
            <input type="text" placeholder="Nome do ator" className="home-form" size="40" />
          </div>
          <div>
            <FaMinusSquare size="25" className="home-form-icon" />
          </div>
          <div>
            <FaPlusSquare size="25" className="home-form-icon" />
          </div>
        </p>
        
      </div>
    </div>
  );
}
