import React from 'react';
import { NavLink } from 'react-router-dom';

import "../css/Header.css";



const Header = () => {

  const handleClick = () => {
    const mobileMenu = document.querySelector(".menu__wrapper"),
      menuButton = document.querySelector(".header__menu-list");
    document.body.classList.toggle("body_overflow-none");
    mobileMenu.classList.toggle("menu__wrapper_is-opened");
    menuButton.classList.toggle("header__menu-list_is-active");
  }

  return (
    <header className="header">
      <div className="header__container">
        <a href="#" className="header__logo icon-skilldrive"></a>
        <div className="menu__wrapper">
          <nav className="navbar">
            <ul className="navbar__menu">
              <li className="navbar__item"><NavLink to="/about" className="navbar__link">О нас</NavLink></li>
              <li className="navbar__item"><NavLink to="/" className="navbar__link">Условия</NavLink></li>
              <li className="navbar__item"><NavLink to="/faq" className="navbar__link">Частые вопросы</NavLink></li>
            </ul>
          </nav>
          <button className="header__button">Войти</button>
        </div>
        <span className="header__menu-list" onClick={handleClick}></span>
      </div>
    </header>
  );
}

export default Header;
