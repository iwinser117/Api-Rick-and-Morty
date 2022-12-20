import React from "react";

const StatusPerLive = ({ character }) => {
  return (
    <div>
      {character.status === "Alive" ? (
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
      )}
    </div>
  );
};

export default StatusPerLive;
