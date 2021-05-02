import React from 'react';
import teamSpirit from "../css/img/team_spirit.png";

import "../css/About.css";

import Contacts from "./About/Contacts";
import Team from "./About/Team";

const About = () => {

  return (
    <main className="main">
      <section className="section-about">
        <div className="section-about__container">
          <img className="section-about__image" src={teamSpirit} alt="Иллюстрация - Команда" />
          <h1 className="section-about__header">О нас</h1>
          <p className="section-about__content">Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.</p>
        </div>
      </section>
      <Contacts />
      <Team />
    </main>
  );

}

export default About;