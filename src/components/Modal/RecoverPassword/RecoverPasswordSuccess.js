import React, { Fragment } from "react";
import authImageSrc from "../../../css/img/recover_success.png";

const ModalRecover = () => {
  return (
    <Fragment>
      <img
        className="modal-body__image"
        src={authImageSrc}
        alt="Иллюстрация - Проверьте почту"
      />
      <h1 className="modal-body__header">Проверьте почту</h1>
      <p>
        Мы отправили письмо на вашу почту, пройдите по ссылке, которую мы
        отправили и измените пароль.
      </p>
    </Fragment>
  );
};

export default ModalRecover;
