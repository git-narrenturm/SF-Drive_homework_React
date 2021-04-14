import React from 'react';
import { useHistory } from "react-router-dom";

import successPicture from "../../css/img/registration_success.png";

import "../../css/RegisterSuccess.css";

const RegisterSuccess = () => {

  const history = useHistory();

  const handleClick = (e) => {
    history.push("/");
  }

  return (
    <main className="main">
      <section className="section-registration-success">
        <div className="section-registration-success__container">
          <img className="section-registration-success__image" src={successPicture} alt="Иллюстрация - Успех" />
          <h1 className="section-registration-success__header">Успех!</h1>
          <p className="section-registration-success__text">Вы успешно зарегистрировались. Дождитесь проверки документов и начните пользоваться сервисом.</p>
          <button type="button" className="section-registration-success__button"onClick={handleClick}>Перейти на главную</button>
        </div>
      </section>
    </main>
  );
}

export default RegisterSuccess;
