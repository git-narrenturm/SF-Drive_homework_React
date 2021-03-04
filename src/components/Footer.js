import React from "react";

import "../css/Footer.css";

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__copyright">© SkillDrive Inc. 2020</div>
        <div>
          <a href="https://vk.com/" className="footer__social-icon icon-vkontakte" target="_blank" rel="nofollow"></a>
          <a href="https://www.instagram.com/" className="footer__social-icon icon-instagram" target="_blank" rel="nofollow"></a>
          <a href="https://www.facebook.com/" className="footer__social-icon icon-facebook" target="_blank" rel="nofollow"></a>
        </div>
      </div>
    </footer>
  );

}

export default Footer;