import "./style.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { BACKEND_URL } from "../../config/index.js";
import { Filmcard } from "../../components/filmcard/index.jsx";

function filmsHandler(films){
  if(!Array.isArray(films)) 
    return films;

  let i = 1;
  let content = films.map(film => {

    let elenco = film.elenco.map(actor => actor.nome).join(", ");
      
    return (
      // <div className="films-content" key={i++}>
      //   <h2>{film.nome}</h2>
      // </div>
      <Filmcard key={i++} 
                title={film.nome}
                director={film.diretor.nome}
                cast={elenco}
                grade={film.nota}
      />
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
    });
  }, []);

  return (
    <div className="content">
      <h1>FILMES</h1>
      <div className="cards">
        {films}
      </div>
    </div>
  );
}
