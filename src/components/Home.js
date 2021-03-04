import React from "react";

import ButtonRegister from "./ButtonRegister";
import Carousel from "./Carousel";

import "../css/Home.css";

import listPicture01 from "../css/img/car002.png";
import listPicture02 from "../css/img/car003.png";
import listPicture03 from "../css/img/diagram.png";

import tryoutPicture from "../css/img/toycar.png";

const Home = () => {
  return (
    <main>
      <section className="section-register">
        <div className="section-register__container">
          <h1 className="section-register__header">Каршеринг в любой точке России</h1>
          <p className="section-register__content">Будьте всегда за рулём во время путешествий и командировок.</p>
          <ButtonRegister className="section-register__button" />
        </div>
      </section>
      <section className="section-info">
        <div className="section-info__container">
          <div className="section-info__list">
            <div className="section-info__list-item">
              <img className="section-info__list-image" src={listPicture01} alt="Иллюстрация - Аренда напрямую от владельцев" />
              <div className="section-info__list-container">
                <h2 className="section-info__list-header">Аренда напрямую от владельцев</h2>
                <p className="section-info__list-content">Вы получите автомобиль от его собственника, а мы проверим юридическую чистоту и техническую исправность.</p>
              </div>
            </div>
            <div className="section-info__list-item">
              <img className="section-info__list-image" src={listPicture02} alt="Иллюстрация - Автомобили на любой вкус" />
              <div className="section-info__list-container">
                <h2 className="section-info__list-header">Автомобили на любой вкус</h2>
                <p className="section-info__list-content">Вы всегда можете подобрать автомобиль любого класса от бюджетных моделей до премиум-класса и спорткаров.</p>
              </div>
            </div>
            <div className="section-info__list-item">
              <img className="section-info__list-image" src={listPicture03} alt="Иллюстрация - Гарантия честной аренды" />
              <div className="section-info__list-container">
                <h2 className="section-info__list-header">Гарантия честной аренды</h2>
                <p className="section-info__list-content">Общение и оплата происходит через наш сервис, что предотвращает вас от обмана.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-rent">
        <div className="section-rent__container">
          <h2 className="section-rent__header">Как арендовать автомобиль</h2>
          <ul className="section-rent__list">
            <li className="section-rent__list-item" data-number="1">Выберите автомобиль</li>
            <li className="section-rent__list-item" data-number="2">Забронируйте дату и время</li>
            <li className="section-rent__list-item" data-number="3">Получите автомобиль</li>
          </ul>
        </div>
      </section>
      <section className="section-rentout">
        <div className="section-rentout__container">
          <h2 className="section-rentout__header">У вас есть автомобиль?</h2>
          <p className="section-rentout__content">Чтобы он не простаивал — сдавайте его в аренду и зарабатывайте.</p>
          <ul className="section-rentout__list">
            <li className="section-rentout__list-item">Вы сами указываете цену</li>
            <li className="section-rentout__list-item">Мы страхуем автомобили</li>
            <li className="section-rentout__list-item">Наша комиссия всего 3%</li>
            <li className="section-rentout__list-item">Выплаты каждую неделю</li>
          </ul>
        </div>
      </section>
      <Carousel />
      <section className="section-tryout">
        <div className="section-tryout__container">
          <img className="section-tryout__image" src={tryoutPicture} alt="Иллюстрация - Попробуйте" />
          <h2 className="section-tryout__header">Попробуйте аренду на себе</h2>
          <ButtonRegister className="section-try__button" />
        </div>
      </section>

    </main>
  )
}

export default Home;