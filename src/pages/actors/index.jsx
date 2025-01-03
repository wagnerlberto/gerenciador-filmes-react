import "./style.css";
import { BACKEND_URL } from "../../config/index.js";
import axios from "axios";
import { useState } from "react";

function actorsHandler(actors){
  if(!Array.isArray(actors)) 
    return actors;

  let content = actors.map(actor => {
    return (
      <div className="actor">
        <h2>{actor.nome}</h2>
      </div>
    );
  });

  return content;
}

export function Actors() {

  const [actors, setActors] = useState("Nada a mostrar");

  axios.get(`${BACKEND_URL}/atores`)
    .then(response => {
      let actors = response.data;
      setActors(actorsHandler(actors));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
      console.log("Finally");
    });

  return (
    <div className="content">
      <h1>ATORES</h1>
      {actors}
    </div>
  );
}
