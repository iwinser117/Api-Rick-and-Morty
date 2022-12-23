import React, { useState } from "react";


const TargetLocation = ({ dat }) => {
  const [detalles, setDetalles] = useState(true);
  
  return (
    <div className="modal-dialog  border border-1 trg-location">
      <div className="">
        <p>Nombre : {dat.name}</p>
        <p>tipo: {dat.type}</p>
        <p>Dimension: {dat.dimension}</p>
      </div>
      <div>
        {detalles ? (
          <div className="modal-dialog__footer">
            <button
              className="btn btn-primary"
              onClick={() => setDetalles(false)}
            >
              ver
            </button>
          </div>
        ) : (
          <div className="modal-dialog__footer">
            <button
              className="btn btn-primary"
              onClick={() => setDetalles(false)}
            >
              ocultar
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default TargetLocation;
