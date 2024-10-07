import React from "react";
import Nav from "../containers/Nav";
import Banner from "../containers/Banner";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <main className="main-content">
        <Banner />
      </main>
    </div>
  );
};

export default Home;
