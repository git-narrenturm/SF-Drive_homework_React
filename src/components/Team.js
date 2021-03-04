import React from 'react';
import guidGenerator from "./GuidGenerator";

import "../css/Team.css";

import TeamMember from "./TeamMember";

const teamMembers = [
  { name: "Иван Иванов", position: "CEO", picture: "team01.png", hasPaddingRight: true },
  { name: "Алексей Смирнов", position: "Frontend-разрабочик", picture: "team02.png", hasPaddingRight: true },
  { name: "Денис Ярцев", position: "Backend-разработчик", picture: "team03.png", hasPaddingRight: true },
  { name: "Николай Морозов", position: "Дизайнер", picture: "team04.png", hasPaddingRight: false },
  { name: "Ирина Деева", position: "Копирайтер", picture: "team05.png", hasPaddingRight: true },
  { name: "Мария Стрелкова", position: "SMM", picture: "team06.png", hasPaddingRight: false }
]

const Team = () => {
  return (
    <section className="section-team">
      <div className="section-team__container">
        <h2 className="section-team__header">Команда</h2>
        <div className="section-team__list">
          {teamMembers.map((elem) => {
            let key = guidGenerator();
            return (
              <TeamMember key={key} name={elem.name} position={elem.position} pictureName={elem.picture} hasPaddingRight={elem.hasPaddingRight} />
            )
          })}
        </div>
      </div>
    </section>
  );
}

export default Team;