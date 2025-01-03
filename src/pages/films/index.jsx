import "./style.css";
import { BACKEND_URL } from "../../config/index.js";
import axios from "axios";
import { useState, useEffect } from "react";

function filmsHandler(films){
  if(!Array.isArray(films)) 
    return films;

  let i = 1;
  let content = films.map(film => {
    return (
      <div className="films-content" key={i++}>
        <h2>{film.nome}</h2>
      </div>
    );
  });

  return content;
}

export function Films() {

  const [films, setFilms] = useState("Nada a mostrar");

  useEffect(() => {
    axios.get(`${BACKEND_URL}/filmes`)
    .then(response => {
      let films = response.data;
      setFilms(filmsHandler(films));
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
      <h1>FILMES</h1>
      {films}
    </div>
  );
}
