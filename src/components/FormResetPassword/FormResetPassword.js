import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import GroupPassword from "../FormRegister/GroupPassword";

import "../../css/FormResetPassword.css";
import "../../css/ButtonRegister.css";
import pageIllustrationSrc from "../../css/img/diagram.png";

const FormResetPassword = (props) => {

  const [errorMessage, setErrorMessage] = useState(null);

  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  const history = useHistory();
  const handleSubmit = () => {

    const query = {
      query: window.location.search.substring(1)
    };

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify({ ...formValues, ...query})
    }

    fetch("http://localhost:8080/api/reset-password", requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const { success, error } = result;
      if(!success) {
        console.log(error.message);
        setErrorMessage(error.message);
        //console.log(errorMessage);
      }
      else {
        history.push({
          pathname: "./success",
          state: {
            update: true
          }
        });
      }
    });
  }

  return (
    <main className="main">
      <section className="section-reset">
        <div className="section-reset__container">
          <img className="section-reset__image" src={pageIllustrationSrc} alt="Иллюстрация - Часто задавамые вопросы" />
          <h1 className="section-reset__header">Восстановление пароля</h1>
          <GroupPassword
              passwordValues={[formValues.password, formValues.confirmPassword]}
              handleChange={handleChange}
              errorMessage={errorMessage}
            />
          <button
            className="section-reset__button"
            onClick={handleSubmit}
          >Обновить</button>
        </div>
      </section>
    </main >
  );

}

export default FormResetPassword;