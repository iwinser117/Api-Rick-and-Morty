import React from "react";

const StatusPerLive = ({ character }) => {
  return (
    
    <div>
      {(() => {
        if (character.status === "Alive") {
          return (
            <img
              src={character.image}
              className="rounded-circle img-trg-person-live"
              alt=""
            />
          );
        }if (character.status === "Dead") {
          return (
            <img
              src={character.image}
              className="rounded-circle img-trg-person-muerto"
              alt=""
            />
          );
        }if (character.status === "unknown") {
          return (
            <img
              src={character.image}
              className="rounded-circle img-trg-person-desconocido"
              alt=""
            />
          );
        }
      })()}
      {/*   character.status === "Alive" ? (
        <img
        src={character.image}
        className="rounded-circle img-trg-person-live"
        alt=""
      />
      ) : (
        <img
          src={character.image}
          className="rounded-circle img-trg-person-muerto"
          alt=""
        />
      )} */}
    </div>
  );
};

export default StatusPerLive;
