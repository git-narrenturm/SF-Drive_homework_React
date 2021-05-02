import React from 'react';
import guidGenerator from "../actions/guidGenerator";

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import '../css/Carousel.css';

const reviews = [
  { name: "Иван Иванов", city: "Москва", text: "Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.", avatar: "review01.png" },
  { name: "Иван Иванов", city: "Москва", text: "Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.", avatar: "review01.png" },
  { name: "Иван Иванов", city: "Москва", text: "Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.", avatar: "review01.png" },
  { name: "Иван Иванов", city: "Москва", text: "Классный сервис! В путешествиях по стране часто берём машину в аренду. Здесь нету ограничений по зоне перемещения и поэтому есть возможность съездить в интересные туристические места, которые отдалены от города.", avatar: "review01.png" }
];


const Carousel = () => {
  return (
    <section className="section-reviews">
      <div className="section-reviews__container">
        <div className="section-reviews__header">Отзывы клиентов</div>
        <AwesomeSlider className="section-reviews__carousel"
          organicArrows={false}
          bullets={true}
          buttonContentRight={<span className="icon-caret carousel__arrow-right"></span>}
          buttonContentLeft={<span className="icon-caret carousel__arrow-left"></span>}
        >
          {reviews.map((elem) => {
            let key = guidGenerator();
            const teamMemberPhoto = require(`../css/img/${elem.avatar}`);
            return (
              <div key={key} className="section-reviews__carousel-item">
                <div className="carousel-item__container">
                  <img className="carousel-item__image" src={teamMemberPhoto.default} />
                  <div className="carousel-item__header">
                    <div>{elem.name}</div>
                    <div className="carousel-item__details">{elem.city}</div>
                  </div>
                </div>
                <div className="carousel-item__content">{elem.text}</div>
              </div>
            )
          })}
        </AwesomeSlider>
      </div>
    </section>
  );
}

export default Carousel;