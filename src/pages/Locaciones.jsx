import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Location from "../containers/Location";
import Paginacion from "../components/Paginacion";
import Nav from "../containers/Nav";
import BtnArriba from "../components/BtnArriba";

const Locaciones = () => {
  const [location, setLocation] = useState([]);
  const [page, setPage] = useState({});
  const APILOCACION = "https://rickandmortyapi.com/api/location";
  const fetchLocaciones = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLocation(data.results);
        setPage(data.info);
      });
  };
  /* onPrev, OnNext */
  const onPrev = () => {
    fetchLocaciones(page.prev);
  };
  const OnNext = () => {
    fetchLocaciones(page.next);
  };
  useEffect(() => {
    fetchLocaciones(APILOCACION);
  }, []);
  return (
    <>
      <Nav/>
      <Location location={location} />
      <Paginacion
        prev={page.prev}
        next={page.next}
        /* pages={page.pages} */
        onPrev={onPrev}
        OnNext={OnNext}
      />
      <BtnArriba />
    </>
  );
};

export default Locaciones;
