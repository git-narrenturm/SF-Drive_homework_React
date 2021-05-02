import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import '../../css/ButtonContinue.css';

const ButtonSubmit = (props) => {

  const history = useHistory();

  const submitForm = (e) => {
    const inputs = document.querySelectorAll(".form-register__input");
    inputs.forEach(element => {
      if (element.value == "") {
        element.classList.add("form-register__input_error");
      }
    })

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept' : 'application/json',
        'Content-Type': 'application/json'
    },
      body: JSON.stringify(props.formValues)
    }

    fetch("http://localhost:8080/api/users", requestOptions)
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      const success = result.success;
      if(!success) {
        props.handleClick(1);
      }
      else {
        localStorage.setItem("accessToken", result.accessToken);
        localStorage.setItem("refreshToken", result.refreshToken);
        history.push({
          pathname: "./success",
          state: {
            update: false
          }
        });
      }
    });

  };

  return (
    <button type="button" className="section-form-register__button" onClick={submitForm}>Продолжить</button>
  );
}

export default ButtonSubmit;