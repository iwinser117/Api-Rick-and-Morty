import React from "react";
import "../styles/banner.css";
import icRick from '../asset/icons8-rick-sanchez-400.svg'
import icMorty from '../asset/icons8-morty-smith-400.svg'

const Banner = () => {
  return (
    <div className="banner">
      <h1 className="banner-title">Rick and Morty</h1>
      <p className="banner-subtitle">Bienvenidos a mi web de Rick and Morty</p>
      <div className="banner-images">
        <img src={icRick} alt="Rick" />
        <img src={icMorty} alt="Morty" />
      </div>
    </div>
  );
};

export default Banner;
