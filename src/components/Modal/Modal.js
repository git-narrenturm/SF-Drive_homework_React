import React, { useState } from "react";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import Login from "./Authorization/Login";
import Recover from "./RecoverPassword/RecoverPassword";
import Success from "./RecoverPassword/RecoverPasswordSuccess";

import closeModal from "../../actions/closeModal";

import "../../css/Modal.css";

const Modal = () => {
  const [selectedSlideNumber, changeSlideNumber] = useState(0);
  const handleSlideChange = (e, num) => {
    changeSlideNumber(num);
  };
  const handleSlideBack = (e, num) => {
    changeSlideNumber(selectedSlideNumber - 1);
  };

  const handleModalClose = () => {
    changeSlideNumber(0);
    closeModal();
  };

  return (
    <div name="modal" className="hidden">
      <div className="overlay"></div>
      <div className="modal">
        <div className="modal__header">
          {selectedSlideNumber == 1 ?
          <button
            className="modal__button-back icon-arrow"
            onClick={handleSlideBack}
          ></button>
          : ""}
          <button
            className="modal__button-close icon-close"
            onClick={handleModalClose}
          ></button>
        </div>

        <AwesomeSlider
          className="modal__body"
          organicArrows={false}
          bullets={false}
          selected={selectedSlideNumber}
          infinite={false}
        >
          <div className="modal__wrapper">
            <Login handleSlideChange={handleSlideChange} />
          </div>
          <div className="modal__wrapper">
            <Recover handleSlideChange={handleSlideChange} />
          </div>
          <div className="modal__wrapper">
            <Success />
          </div>
        </AwesomeSlider>
      </div>
    </div>
  );
};

export default Modal;
