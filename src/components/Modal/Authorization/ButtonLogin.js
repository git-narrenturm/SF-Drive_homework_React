import React from "react";
import { useHistory } from "react-router-dom";
import closeModal from "../../../actions/closeModal";

const ButtonLogin = (props) => {

  const history = useHistory();

  const handleLogin = () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props.formValues),
    };

    fetch("http://localhost:8080/api/authorize", requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        if (result && result.email) {
          localStorage.setItem("accessToken", result.accessToken);
          localStorage.setItem("refreshToken", result.refreshToken);
          closeModal();
          history.push("/");
        }
        else {
          const errorMessage = "Не верная почта или пароль";
          props.handleErrorMessage(errorMessage);
        }
      });
  };

  return (
    <button className="modal__button-login" onClick={handleLogin}>
      Войти
    </button>
  );
};

export default ButtonLogin;
