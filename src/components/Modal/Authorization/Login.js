import React, { useState, Fragment } from "react";
import authImageSrc from "../../../css/img/authorization.png";

import ButtonRegister from "../../Home/ButtonRegister";
import ButtonLogin from "./ButtonLogin";

const ModalLogin = (props) => {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setErrorMessage("");
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const nextSlideNumber = 1;
  const handleRecover = (e) => {
    props.handleSlideChange(e, nextSlideNumber);
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handleErrorMessage = (message) => {
    setErrorMessage(message);
  };

  return (
    <Fragment>
      <div>
        <img
          className="modal-body__image"
          src={authImageSrc}
          alt="Иллюстрация - Авторизация"
        />

        <h1 className="modal-body__header">Авторизация</h1>
        <p className="modal-body__error">{errorMessage}</p>
        <div className="modal-section">
          <input
            type="text"
            name="email"
            className={`modal-section__input ${
              errorMessage === "" ? "" : "modal-section__input_error"
            }`}
            placeholder="Электронная почта"
            onChange={handleChange}
          />
          <span
            className={`modal-section__input-placeholder ${
              errorMessage === ""
                ? ""
                : "modal-section__input-placeholder_error"
            }`}
          >
            Электронная почта
          </span>
        </div>

        <div className="modal-section">
          <input
            type="password"
            name="password"
            className={`modal-section__input modal-section__input_no-border-right ${
              errorMessage === "" ? "" : "modal-section__input_error"
            }`}
            placeholder="Пароль"
            onChange={handleChange}
          />
          <span
            className={`modal-section__input-placeholder ${
              errorMessage === ""
                ? ""
                : "modal-section__input-placeholder_error"
            }`}
          >
            Пароль
          </span>
          <button
            className={`modal-section__button-recover ${
              errorMessage === "" ? "" : "modal-section__button-recover_error"
            }`}
            onClick={handleRecover}
          >
            Забыли?
          </button>
        </div>
        <ButtonLogin
          formValues={formValues}
          handleErrorMessage={handleErrorMessage}
        />
      </div>

      <div className="modal__footer">
        <ButtonRegister className="modal__button-register" />
      </div>
    </Fragment>
  );
};

export default ModalLogin;
