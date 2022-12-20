import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
const TargetDetails = () => {

  const []= setS

  const APIID = `https://rickandmortyapi.com/api/character/${id}`;
  let { id } = useParams();

  useEffect(()=> {
    (async function () {
      let data  = await fetch(APIID)
      .then((res)=> res.json())

    })();
  })
  return (
    <div>este es el id {id}</div>
    /* 
    <div className="card" style="width: 18rem;">
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Título de la tarjeta</h5>
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
    </div> */
  );
};

export default TargetDetails;
