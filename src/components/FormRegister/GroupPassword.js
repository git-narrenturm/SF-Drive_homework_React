import React, { Fragment, useState } from 'react';

const GroupPassword = (props) => {

  const [errorMessage, setErrorMessage] = useState(null);

  //regular expression for password
  //minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:
  const regEx = new RegExp("[A-Za-z0-9]{8,}$");

  const handleBlur = () => {
    const password = props.passwordValues[0];
    const confirmPassword = props.passwordValues[1];
    if(password == '' || confirmPassword == '') setErrorMessage(null);
      else if (password != confirmPassword ) setErrorMessage(`Пароли не совпадают`)
      else if (!regEx.test(password) && !regEx.test(confirmPassword)) setErrorMessage(`Пароль должен состоять из латинских букв и содержать минимум 8 символов, одну цифру, одну букву`)
      else setErrorMessage(null);
  }

  return (

    <Fragment>
      <div className="form-register__item-group">
        <div className="form-register__item">
          <label htmlFor="password" className="form-register__label">Придумайте пароль</label>
          <input
            type="text"
            id="password"
            name="password"
            className="form-register__input form-register__input_large"
            onBlur={handleBlur}
            onChange={props.handleChange}
          />
        </div>
      </div>
      <div className="form-register__item-group">
        <div className="form-register__item">
          <label htmlFor="confirmPassword" className="form-register__label">Повторите пароль</label>
          <input
            type="text"
            id="confirmPassword"
            name="confirmPassword"
            className="form-register__input form-register__input_large"
            onBlur={handleBlur}
            onChange={props.handleChange}
          />
        </div>
        <div className="form-register__error-note">{errorMessage}</div>
      </div>
    </Fragment>
  );
}

export default GroupPassword;
