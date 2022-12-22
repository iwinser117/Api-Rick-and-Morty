import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import StatusPerLive from "../components/StatusPerLive";
const TargetPersonaje = ({ character, page }) => {
  /* const [detalles, setDetalles] = useState(null) */
  /* const { id, status, name, image } = character; */
  return (
    <div className="modal-dialog text-center border border-1 rounded-circle trg-person">
      <p>
        <h6>{character.name}</h6>
        <StatusPerLive character={character} />
        <Link to={`${page}${character.id}`} className="pe-auto">
          <i className="fa-regular fa-eye"></i>
        </Link>
        <br />
        Especie:
        {character.species}
        <br />
        Origen:
        {character.origin.name}
      </p>
    </div>
  );
};

export default TargetPersonaje;
