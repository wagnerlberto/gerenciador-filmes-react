import "./style.css";
import { BACKEND_URL } from "../../config/index.js";
import axios from "axios";
import { useState, useEffect } from "react";

function directorsHandler(directors){
  if(!Array.isArray(directors)) 
    return directors;

  let i = 1;
  let content = directors.map(director => {
    return (
      <div className="directors-content" key={i++}>
        <h2>{director.nome}</h2>
      </div>
    );
  });

  return content;
}

export function Directors() {

  const [directors, setDirectors] = useState("Nada a mostrar");

  useEffect(() => {
    axios.get(`${BACKEND_URL}/diretores`)
    .then(response => {
      let directors = response.data;
      setDirectors(directorsHandler(directors));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log("Finally");
    });
  }, []);

  return (
    <div className="content">
      <h1>DIRETORES</h1>
      {directors}
    </div>
  );
}
