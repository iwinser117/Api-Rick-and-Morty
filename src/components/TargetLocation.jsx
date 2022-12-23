import React, { useState } from "react";
import BtnVerLocation from "./BtnVerLocation";
const TargetLocation = ({ dat }) => {
  return (
    <>
      <div className="border p-3 border-1 trg-location cont-TDet">
        <div className="">
          <p>Nombre : {dat.name}</p>
          <p>tipo: {dat.type}</p>
          <p>Dimension: {dat.dimension}</p>
        </div>
        <BtnVerLocation dat={dat} />
      </div>
    </>
  );
};

export default TargetLocation;
