import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import StatusPerLive from "../components/StatusPerLive";
const TargetPersonaje = ({ character }) => {
  const [detalles, setDetalles] = useState(null)
  /* const { id, status, name, image } = character; */
  return (
    <div className="modal-dialog text-center border border-1 rounded-circle trg-person">
      <NavLink className="pe-auto" onClick={()=> setDetalles(!detalles)} >
        <i className="fa-regular fa-eye"></i>
      </NavLink>

      <p>
        {character.name}
        <br />
        {character.origin.name} <br />
        {character.species}
      </p>

      <StatusPerLive character={character} />
    </div>
  );
};

export default TargetPersonaje;
