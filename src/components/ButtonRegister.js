import React from "react";
import { useHistory } from "react-router-dom";

import "../css/ButtonRegister.css";

const ButtonRegister = (props) => {

  const history = useHistory();

  const routeChange = () => {
    let path = "/register";
    history.push(path);
  }

  return (
    <button className={props.className} onClick={routeChange}>Зарегистрироваться</button>
  )
}

export default ButtonRegister;