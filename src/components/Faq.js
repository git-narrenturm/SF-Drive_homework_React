import React from "react";
import questionPicture from "../css/img/questions.png";

import "../css/Faq.css";

import Collapse from "./Collapse";

const Faq = () => {

  return (
    <main className="main">
      <section className="section-faq">
        <div className="section-faq__container">
          <img className="section-faq__image" src={questionPicture} alt="Иллюстрация - Часто задавамые вопросы" />
          <h1 className="section-faq__header">Частые вопросы</h1>
          <p className="section-faq__content">Отвечаем на вопросы, которые у вас могут возникнуть.</p>
        </div>
        <Collapse />
      </section>
    </main >
  );

}

export default Faq;