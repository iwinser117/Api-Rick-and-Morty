import React from "react";
import "../styles/index.css";
import icRick from '../asset/icons8-rick-sanchez-400.svg'
import icMorty from '../asset/icons8-morty-smith-400.svg'

const Banner = () => {
  return (
    <div className="container-fluid  justify-content-around d-flex banner">
      <div className="title">
        <h2>Rick and Morty</h2>

        <p>
          bienvenidos a mi Web donde se consume la api de Rick and Morty ,<br />{" "}
          Gracias por su visita.
        </p>
      </div>
      <div className="icns text-center justify-content-around d-flex">
    <img src={icRick} alt="" />
    <img src={icMorty} alt="" />
      </div>
    </div>
  );
};

export default Banner;
