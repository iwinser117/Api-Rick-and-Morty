import axios from "axios";
import React, { useState, useMemo, useRef,useCallback } from "react";
import TargetLocation from "../components/TargetLocation";
import Busqueda from "../components/Busqueda";


const Location = ({location}) => {
  const [search, setSearch] = useState("");
  const searchInput = useRef(null);

  const handleSearch = useCallback(() => {
    setSearch(searchInput.current.value);
  }, []);
  const filteredUsers = useMemo(
    () =>
    location.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase());
      }),
    [location, search]
  );
  return (
    <>
      <section className="container-fluid row justify-content-around d-flex sect-per">
        <h1 className="title-ubicacion">Ubicaciones</h1>
        <Busqueda
          placeholder={"¿Buscas a alguien?"}
          search={search}
          searchInput={searchInput}
          handleSearch={handleSearch}
        />
        
        {/* <TargetLocation/> */}
        {filteredUsers.map((dat) => (
          <TargetLocation key={dat.id} dat={dat} />
        ))}
      </section>
    </>
  );
};

export default Location;
