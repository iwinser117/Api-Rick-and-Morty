import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const TargetDetails = () => {
  const [personajes, setPersonajes] = useState([]);
  const { name, image, location, origin, gender, species, status, type } =
    personajes;
  let { id } = useParams();
  const APIID = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(APIID).then((res) => res.json());
      setPersonajes(data);
    })();
  }, [APIID]);

  return (
    <div className="card">
      <img
        src={image}
        className="card-img-top rounded-circle img-trg-person-live"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">
          Un texto de ejemplo rápido para colocal cerca del título de la tarjeta
          y componer la mayor parte del contenido de la tarjeta.
        </p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">Un elemento</li>
        <li className="list-group-item">Un segundo elemento</li>
        <li className="list-group-item">Un tercer elemento</li>
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          Enlace de tarjeta
        </a>
        <a href="#" className="card-link">
          Otro enlace
        </a>
      </div>
    </div>
  );
};

export default TargetDetails;
