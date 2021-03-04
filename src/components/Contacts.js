import React from 'react';

import "../css/Contacts.css";

const Contacts = () => {
    return (
      <section className="section-contacts">
        <div className="section-contacts__container">
          <h2 className="section-contacts__header">Контакты</h2>
          <div className="section-contacts__content">
            <div className="section-contacts__item section-contacts__item_lg-border-right">
              <div className="contact__header">Электронная почта</div>
              <div className="contact__content"><a href="mailto:drive@skillfactory.com" className="contact__link">drive@skillfactory.com</a></div>
            </div>
            <div className="section-contacts__item">
              <div className="contact__header">Телефон</div>
              <div className="contact__content"><a href="tel:+79121234567" className="contact__link">+7 912 123-45-67</a></div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Contacts;