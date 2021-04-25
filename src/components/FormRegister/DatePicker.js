import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import dateFnsRu from 'date-fns/locale/ru';
registerLocale('ru', dateFnsRu);

import "react-datepicker/dist/react-datepicker.css";

const DateInput = (props) => {

  const [inputDate, setStartDate] = useState(null);

  const handleChange = (date) => {
    setStartDate(date);
    const dd = ('0' + date.getDate()).slice(-2),
      mm = ('0' + (date.getMonth() + 1)).slice(-2),
      yy = date.getFullYear();
    const target = document.getElementById(props.inputName);
    target.value = `${yy}-${mm}-${dd}`;
    const e = new Object;
    e.target = document.getElementById(props.inputName);
    props.handleChange(e);
  };

  return (
    <div className="form-register__item-group">
      <div className="form-register__item">
        <label htmlFor={`${props.inputName}`} className="form-register__label">{props.labelText}</label>
        <DatePicker
          id={props.inputName}
          name={props.inputName}
          selected={inputDate}
          onChange={handleChange}
          value={inputDate}
          locale="ru"
          dateFormat="dd.MM.yyyy"
          className="form-register__input form-register__input_large"
          placeholderText="01.01.2000"
        />
      </div>
    </div>
  );
}

export default DateInput;