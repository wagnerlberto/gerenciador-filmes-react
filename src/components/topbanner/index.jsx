import TesteLogo from "./imgs/logo.jpeg";
import "./style.css";

export function Topbanner(){
  return(
    <div className="topbanner">
      <img className="topbanner" src={TesteLogo} alt="Logo" />
      <center className="topbanner">
        GERENCIADOR DE FILMES
      </center>
    </div>
  );
}
