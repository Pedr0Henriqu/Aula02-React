import { useEffect, useState } from "react";
import ItemMusica from "../components/ItemMusica";
import Menu from "../components/Menu";

import api from "../api"; // importando a instância do Axios de "api.js"

function Musicas() {
  const [listaMusicas, setListaMusicas] = useState([]); // criando estado de vetor para uma lista de músicas

  useEffect(() => {
    api
      .get()
      .then((res) => {
        console.log(res.data);
        setListaMusicas(res.data);
        console.log("essa e a lista de musicas", listaMusicas);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <>
    <Menu />

      <div class="container">
        <div class="filter">
            <button class="btn">Adicionar</button>
        </div>
    </div>

    <div class="container">
        <div class="music-boxes">
          <ItemMusica nome="Ela Partiu" artista="Tim Maia" genero="Musica da boa" ano="antiga"/>
          <ItemMusica nome="Azul da cor do mar" artista="Tim Maia" genero="Musica da boa" ano="antiga"/>
          <ItemMusica />
          <ItemMusica />
          <ItemMusica />
          <ItemMusica />
        </div>
    </div>
    </>
  );
}


export default Musicas;
