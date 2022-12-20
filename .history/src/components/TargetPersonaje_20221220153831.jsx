import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import StatusPerLive from "../components/StatusPerLive";
const TargetPersonaje = ({ character, page }) => {
  const [detalles, setDetalles] = useState(null)
  /* const { id, status, name, image } = character; */
  return (
    <div className="modal-dialog text-center border border-1 rounded-circle trg-person">
      

      <p>
        <p>{character.id}</p>

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
