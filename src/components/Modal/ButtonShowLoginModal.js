import React from "react";

const ButtonShowLoginModal = () => {

  const handleClick = () => {
    const modal = document.getElementsByName("modal")[0];
    modal.classList.toggle("hidden");
  }

  return (
    <button className="header__button" onClick={handleClick}>Войти</button>
  )
}

export default ButtonShowLoginModal;