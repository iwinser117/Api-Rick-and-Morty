import React, { useEffect, useState, useMemo } from "react";
import Nav from "../containers/Nav";
import Card from "../containers/Card";
import BtnArriba from "../components/BtnArriba";
import Paginacion from "../components/Paginacion";
const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  const [page, setPage] = useState({});

  const APIINICIAL = "https://rickandmortyapi.com/api/character";
  const fetchPersonajes = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPersonajes(data.results);
        setPage(data.info);
      });
  };
  const onPrev = () => {
    fetchPersonajes(page.prev);
  };
  const OnNext = () => {
    fetchPersonajes(page.next);
  };

  useEffect(() => {
    fetchPersonajes(APIINICIAL);
  }, []);
  return (
    <>
      <Nav />
      <Card personajes={personajes} />
      <Paginacion
        prev={page.prev}
        next={page.next}
        onPrev={onPrev}
        OnNext={OnNext}
      />
      <BtnArriba />
    </>
  );
};

export default Personajes;
