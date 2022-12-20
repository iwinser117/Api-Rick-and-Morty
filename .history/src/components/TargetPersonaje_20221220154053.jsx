import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import StatusPerLive from "../components/StatusPerLive";
const TargetPersonaje = ({ character, page }) => {
  /* const [detalles, setDetalles] = useState(null) */
  /* const { id, status, name, image } = character; */
  return (
    <div className="modal-dialog text-center border border-1 rounded-circle trg-person">
      <Link
        to={`${page}${character.id}`}
        className="pe-auto"
        onClick={() => setDetalles(!detalles)}
      >
        <i className="fa-regular fa-eye"></i>
      </Link>
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
