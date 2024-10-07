import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/nav.css";
import logoPersonal from "../asset/ok.ico";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logoPersonal} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><NavLink to="/" activeclassname="active">Home</NavLink></li>
        <li><NavLink to="/personajes" activeclassname="active">Personajes</NavLink></li>
        <li><NavLink to="/locaciones" activeclassname="active">Ubicaciones</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;
