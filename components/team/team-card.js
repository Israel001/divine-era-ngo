import React from "react";

const TeamCard = ({ extraClass, image, name, designation, position }) => {
  return (
    <div className={`team-card text-center ${extraClass}`}>
      <div className="team-card__image">
        <img src={image} alt="" />
      </div>

      <div className="team-card__content">
        <p>{name}</p>
        <p>{position}</p>
        <p>{designation}</p>
      </div>
    </div>
  );
};

export default TeamCard;
