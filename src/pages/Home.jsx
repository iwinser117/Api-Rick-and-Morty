import React, { useEffect, useState } from "react";
import '../styles/index.css'
import Nav from "../containers/Nav";
import Banner from "../containers/Banner";
const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Banner />
    </div>
  );
};

export default Home;
