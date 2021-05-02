import React from 'react';

const TeamMember = (props) => {

  const teamMemberPhoto = require(`../../css/img/${props.pictureName}`);

  return (
    <div className={`section-team__item ${props.hasPaddingRight ? "section-team__item_lg-padding-right" : ""}`}>
      <img className="team-member__image" src={teamMemberPhoto.default} alt={props.name} />
      <div className="team-member__name">{props.name}</div>
      <div className="team-member__position">{props.position}</div>
    </div>
  );
}

export default TeamMember;