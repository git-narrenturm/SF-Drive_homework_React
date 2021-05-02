import React, { useState, Fragment } from "react";
import authImageSrc from "../../../css/img/recover.png";

const ModalRecover = (props) => {
  const [formValues, setFormValues] = useState({
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    setErrorMessage("");
  };

  const [errorMessage, setErrorMessage] = useState("");
  const handlePasswordRecover = (e) => {
    const nextSlideNumber = 2;
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues),
    };

    fetch("http://localhost:8081/api/authorize/recover", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result.error) {
          setErrorMessage(result.error.message);
        } else {
          props.handleSlideChange(e, nextSlideNumber);
        }
      });
  };

  return (
    <Fragment>
      <div>
        <img
          className="modal-body__image"
          src={authImageSrc}
          alt="Иллюстрация - Восстановление пароля"
        />

        <h1 className="modal-body__header">Восстановление пароля</h1>
        <p className="modal-body__text">
          Мы отправим ссылку для восстановления пароля на вашу электронную почту
        </p>
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
        <button className="modal__button-login" onClick={handlePasswordRecover}>
          Отправить
        </button>
      </div>
    </Fragment>
  );
};

export default ModalRecover;
