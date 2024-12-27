import TesteLogo from "./imgs/logo.jpeg";
import "./style.css";

export function Topbanner(){
  return(
    <div className="topbanner">
      <center className="topbanner">
        <img className="topbanner" src={TesteLogo} alt="Logo" />
        GERENCIADOR DE FILMES
      </center>
    </div>
  );
}