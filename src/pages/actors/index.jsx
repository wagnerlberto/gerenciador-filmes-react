import "./style.css";
import { BACKEND_URL } from "../../config/index.js";
import axios from "axios";
import { useState, useEffect } from "react";

function actorsHandler(actors){
  if(!Array.isArray(actors)) 
    return actors;

  let i = 1;
  let content = actors.map(actor => {
    return (
      <div className="actors-content" key={i++}>
        <h2>{actor.nome}</h2>
      </div>
    );
  });

  return content;
}

export function Actors() {

  const [actors, setActors] = useState("Nada a mostrar");

  useEffect(() => {
    axios.get(`${BACKEND_URL}/atores`)
    .then(response => {
      let actors = response.data;
      setActors(actorsHandler(actors));
    })
    .catch(error => {
      console.error(error);
    })
    .finally(() => {
    });
  }, []);

  return (
    <div className="content">
      <h1>ATORES</h1>
      {actors}
    </div>
  );
}
