import React from "react";

const TeamCard = ({ extraClass, image, name, designation, position }) => {
  return (
    <div className={`team-card text-center ${extraClass}`}>
      <div className="team-card__image">
        <img src={image} alt="" />
      </div>

      <div className="team-card__content">
        <h3>{name}</h3>
        <p>{position}</p>
        {/* <p>{designation}</p> */}
      </div>
    </div>
  );
};

export default TeamCard;
