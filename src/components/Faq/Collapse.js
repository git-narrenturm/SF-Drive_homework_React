import React from "react";
import guidGenerator from "../../actions/guidGenerator";

import "../../css/Collapse.css";

import CollapseElement from "./CollapseElement";

const faqDetails = [
  { question: "Могу ли я отменить бронь?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Могу ли я вернуть деньги, если не подошёл автомобиль?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Что делать, если случилось ДТП?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Могу ли я оставить автомобиль в удобном для меня месте?", answer: "Данный вопрос обсуждается с собственником, но как правило автомобиль нужно вернуть туда, где вы его получили." },
  { question: "Что делать, если собственник просит заплатить ему напрямую?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
  { question: "Должен ли я заправлять автомобиль?", answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." }
]

const Collapse = () => {

  return (
    <div className="section-faq__collapse-set">
      {faqDetails.map((elem) => {
        let key= guidGenerator();
        return (
          <CollapseElement key={key} question={elem.question} answer={elem.answer} />
        )
      })}
    </div>
  );

}

export default Collapse;