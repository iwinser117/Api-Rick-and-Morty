import React , {useState, useEffect} from "react";
import axios from "axios";

const Paginacion = ({prev, next, onPrev, OnNext}) => {
  const handlePrev = ()=> {
    onPrev();
  }
  const handleNext = ()=> {
    OnNext();
  }
  return (
    <nav aria-label="Page navigation example position-relative">
      <ul className="pagination justify-content-center position-fixed bottom-0 end-50 start-50">
      {prev ? (
        <li className="page-item">
          <button className="page-link" onClick={handlePrev}>Anterior</button>
        </li>
      ): null}
        
       
        
        {next? (
        <li className="page-item">
          <button className="page-link" onClick={handleNext}>Siguiente</button>
        </li>):null}
      </ul>
    </nav>
    
  );
};

export default Paginacion;
