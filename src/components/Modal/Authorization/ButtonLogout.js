import React from "react";
import closeModal from "../../../actions/closeModal";

const ButtonLogout = (props) => {
  const handleLogout = () => {
    console.log(localStorage.getItem("accessToken"));

  };

  return (
    <button className="modal__button-login" onClick={handleLogout}>
      Выйти
    </button>
  );
};

export default ButtonLogout;
