import React, { useState, useEffect, useMemo, useRef,useCallback, NavLink } from "react";
import Busqueda from "../components/Busqueda";
import TargetPersonaje from "../components/TargetPersonaje";
import Paginacion from "../components/Paginacion";

const Card = ({ personajes = [] }) => {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  const filteredUsers = useMemo(
    () =>
      personajes.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [personajes, search]
  );

  return (
    <section className="container row justify-content-around d-flex sect-per">
      <h1 className="title-pers">Personajes</h1>
      {/* {!personajes ? null  : <Busqueda/>} */}
      <Busqueda
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />
      

      {filteredUsers.map((character, index) => (
        <TargetPersonaje key={index} character={character} />
      ))}
    </section>
  );
};

export default Card;
