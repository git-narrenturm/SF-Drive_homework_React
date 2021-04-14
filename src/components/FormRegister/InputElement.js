import React, { useState } from 'react';

import '../../css/FormRegister.css';

const FormElement = (props) => {

  const [errorIsVisible, setVisibility] = useState(0);

  const handleBlur = (e) => {
    const element = e.target;
    const value = e.target.value;
    const regEx = new RegExp(element.dataset.regexp);
    if (element.value != "" && !regEx.test(value)) {
      element.classList.add("form-register__input_error");
      setVisibility(1);
    }
    else {
      element.classList.remove("form-register__input_error");
      setVisibility(0);
    }
  }

  return (
    <div className="form-register__item-group">
      <div className="form-register__item">
        <label htmlFor={`${props.inputName}`} className="form-register__label">{props.labelText}</label>
        <input
          type={props.inputType}
          id={props.inputName}
          name={props.inputName}
          placeholder={props.inputPlaceholder}
          className={`form-register__input ${props.inputClassName}`}
          maxLength={props.inputMaxlength}
          data-regexp={props.inputRegExp}
          onChange={props.handleChange}
          onBlur={handleBlur}
        />
      </div>
      { props.errorMessage && errorIsVisible ? <div className="form-register__error-note">{props.errorMessage}</div> : "" }
    </div>

  );
}

export default FormElement;