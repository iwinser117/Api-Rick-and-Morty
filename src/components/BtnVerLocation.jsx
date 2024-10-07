import React, {useState} from 'react'

const BtnVerLocation = ({dat}) => {
    const [ver, setView] = useState(true);
    const formattedDate = new Date(dat.created).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false // Para formato de 24 horas
    });
    
    return (
      <>
        <div>
          {ver ? (
            <button
              className="btn btn-primary"
              type="button"
              onClick={() => setView(false)}
            >
              ver
            </button>
          ) : (
            <div>
              <p>Residentes: tenemos {dat.residents.length} residentes</p>
              <p>fecha de creacion: {formattedDate}</p>
              <button className="btn btn-primary" onClick={() => setView(true)}>
                ocultar
              </button>
            </div>
          )}
        </div>
      </>
    );
}

export default BtnVerLocation;