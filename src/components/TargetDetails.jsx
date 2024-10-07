import React, { useEffect, useState } from "react";
import Nav from "../containers/Nav";
import { useParams, useNavigate } from "react-router-dom"; // Importamos useNavigate
import "../styles/index.css";

const TargetDetails = () => {
  const [personajes, setPersonajes] = useState([]);
  const { name, image, location, origin, gender, species, status, type } =
    personajes;
  let { id } = useParams();
  let navigate = useNavigate(); // Usamos useNavigate para redirigir

  const APIID = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    (async function () {
      let data = await fetch(APIID).then((res) => res.json());
      setPersonajes(data);
    })();
  }, [APIID]);

  // Función para manejar el botón de cerrar
  const handleClose = () => {
    navigate("/personajes"); // Redirige a la página de personajes
  };

  return (
    <>
      <Nav />
      <div className="card-detail">
        <div className="card w-50 m-auto card-content">
          <h2 className="title-center">Detalles</h2>
          <div className="row g-8 ">
            <div className="col-md-4">
              <img src={image} className="img-fluid rounded-start " alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h4 className="card-title">{name}</h4>
                {(() => {
                  if (status === "Dead") {
                    return <div className="badge bg-danger fs-5">{status}</div>;
                  } else if (status === "Alive") {
                    return (
                      <div className=" badge bg-success fs-5 m-auto">
                        {status}
                      </div>
                    );
                  } else {
                    return (
                      <div className="badge bg-secondary fs-5">{status}</div>
                    );
                  }
                })()}
                <div className="content">
                  <div className="">
                    <span className="fw-bold">Gender : </span>
                    {gender}
                  </div>
                  <div className="">
                    <span className="fw-bold">Location: </span>
                    {location?.name}
                  </div>
                  <div className="">
                    <span className="fw-bold">Origin: </span>
                    {origin?.name}
                  </div>
                  <div className="">
                    <span className="fw-bold">Species: </span>
                    {species}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Botón de cerrar */}
          <div className="text-center mt-4">
            <button className="btn btn-danger" onClick={handleClose}>
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TargetDetails;
