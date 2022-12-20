import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const BtnArriba = () => {
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  return (
    <>
      <div className="position-relative">
        <div className="position-fixed  bottom-0  start-5 end-0 translate-middle">
          
          <button type="button" className="btn btn-light" onClick={scrollToTop} >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-circle"
              viewBox="0 0 16 16"
            >
              <path
                fill="evenodd"
                d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
              />
            </svg>
          </button>
          
        </div>
      </div>
    </>
  );
};

export default BtnArriba;
