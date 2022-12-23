import React, {useState} from 'react'

const BtnVerLocation = ({dat}) => {
    const [ver, setView] = useState(true);
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