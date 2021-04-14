import React, { useState, Fragment } from 'react';

import '../../css/FormRegister.css';

import DatePicker from './DatePicker';
import InputElement from './InputElement';
import GroupPassword from './GroupPassword';

import ButtonSubmit from './ButtonSubmit';

const FormRegister = () => {

  const [errorMessageIsVisible, setErrorMessageVisibility] = useState(0);

  const handleClick = (value) => {
    console.log(value);
    setErrorMessageVisibility(value)
  }

  const personEmailRegEx = '^(([^<>()[\\]\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$';
  const personPhoneRegEx = '^\\d{11}$';
  const passportIssuerRegEx = '^\\d{6}$';
  const documentNumberRegEx = '^\\d{10}$';

  const [formValues, setFormValues] = useState({
    personName: "",
    personBirthDate: "",
    personEmail: "",
    personPhone: "",
    passportNumber: "",
    passportIssueDate: "",
    passportIssuer: "",
    passportIssuerNumber: "",
    drivingLicence: "",
    drivingLicenceIssueDate: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <Fragment>
      {
        errorMessageIsVisible ?
          <div className="section-form-register__error">
            <div>Не удалось продолжить регистрацию. Попробуйте ещё раз</div>
          </div> : ""
      }
      <section className="section-form-register">

        <form className="section-register__form">
          <h1 className="form-register__header">Расскажите о себе</h1>
          <div>
            <h2 className="form-register__group-header">Информация о вас</h2>
            <InputElement
              labelText="ФИО"
              inputType="text"
              inputName="personName"
              inputPlaceholder="ФИО полностью"
              inputClassName="form-register__input_large"
              handleChange={handleChange}
            />
            <DatePicker
              labelText="Дата рождения"
              inputName="personBirthDate"
              handleChange={handleChange}
            />
            <InputElement
              labelText="Электронная почта"
              inputType="text"
              inputName="personEmail"
              inputPlaceholder="mail@example.com"
              inputClassName="form-register__input_large"
              inputRegExp={personEmailRegEx}
              handleChange={handleChange}
              errorMessage={`Почта указана не верно`}
            />
            <InputElement
              labelText="Телефон"
              inputType="text"
              inputName="personPhone"
              inputPlaceholder="+7 900 000-00-00"
              inputClassName="form-register__input_small"
              inputMaxlength="11"
              inputRegExp={personPhoneRegEx}
              handleChange={handleChange}
              errorMessage={`Номер телефона должен состоять из 11 цифр`}
            />
          </div>
          <div>
            <h2 className="form-register__group-header">Паспорт</h2>
            <InputElement
              labelText="Серия и номер"
              inputType="text"
              inputName="passportNumber"
              inputPlaceholder="0000 000000"
              inputClassName="form-register__input_small"
              inputMaxlength="10"
              inputRegExp={documentNumberRegEx}
              handleChange={handleChange}
              errorMessage={`Номер паспорта должен состоять из 10 цифр`}
            />
            <DatePicker
              labelText="Дата выдачи"
              inputName="passportIssueDate"
              handleChange={handleChange}
            />
            <InputElement
              labelText="Кем выдан"
              inputType="text"
              inputName="passportIssuer"
              inputPlaceholder="Название органа, выдавшего паспорт"
              inputClassName="form-register__input_large"
              handleChange={handleChange}
            />
            <InputElement
              labelText="Код подразделения"
              inputType="text"
              inputName="passportIssuerNumber"
              inputPlaceholder="000-000"
              inputClassName="form-register__input_small"
              inputMaxlength="6"
              inputRegExp={passportIssuerRegEx}
              handleChange={handleChange}
              errorMessage={`Код подразделения должен состоять из 6 цифр`}
            />
          </div>
          <div>
            <h2 className="form-register__group-header">Водительское удостоверение</h2>
            <InputElement
              labelText="Серия и номер"
              inputType="text"
              inputName="drivingLicence"
              inputPlaceholder="0000 000000"
              inputClassName="form-register__input_small"
              inputMaxlength="10"
              inputRegExp={documentNumberRegEx}
              handleChange={handleChange}
              errorMessage={`Номер водительского удостоверения должен состоять из 10 цифр`}
            />
            <DatePicker
              labelText="Дата выдачи"
              inputName="drivingLicenceIssueDate"
              handleChange={handleChange}
            />
          </div>
          <div>
            <h2 className="form-register__group-header">Пароль</h2>
            <GroupPassword
              passwordValues={[formValues.password, formValues.confirmPassword]}
              handleChange={handleChange}
            />
          </div>
        </form>
      </section>
      <div className="section-form-register__footer">
        <ButtonSubmit
          formValues={formValues}
          errorMessageIsVisible={errorMessageIsVisible}
          handleClick={handleClick}
        />
      </div>
    </Fragment>

  );
}

export default FormRegister;
