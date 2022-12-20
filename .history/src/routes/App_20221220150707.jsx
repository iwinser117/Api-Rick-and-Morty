import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import TargetDetails from "../components/TargetDetails";
import Home from "../pages/Home";
import Personajes from "../pages/Personajes";
import Locaciones from "../pages/Locaciones";
import NotFound from "../pages/NotFound";
const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<TargetDetails />} />
        <Route path="/locaciones" element={<Locaciones />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
