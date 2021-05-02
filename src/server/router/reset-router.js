const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const cryptoJS = require("crypto-js");

const { SALT, PRIVATE_KEY } = require("../auth/authConstants");

const User = require("../db/usersSchema");

router.post("/", async (req, res) => {
  const { password, confirmPassword, query } = req.body;

  if (password == "" || confirmPassword == "") {
    return res.status(400).send({
      success: false,
      error: { message: "Пожалуйста, введите пароль" },
    });
  }

  //check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).send({
      success: false,
      error: { message: "Пароли не совпадают" },
    });
  }

  let personEmailDecrypted = cryptoJS.AES.decrypt(query, PRIVATE_KEY);
  personEmailDecrypted = personEmailDecrypted.toString(cryptoJS.enc.Utf8);

  const userRecord =
    (await User.findOne({ personEmail: personEmailDecrypted })) || false;
  if (!userRecord) {
    return res.status(400).send({
      success: false,
      error: { message: `Такая почта не зарегистрирована` },
    });
  }

  //password hashing
  const passwordHashed = bcrypt.hashSync(password, bcrypt.genSaltSync(SALT));

  //updating DB
  User.findOneAndUpdate(
    { personEmail: personEmailDecrypted },
    { password: passwordHashed },
    { returnOriginal: false },
    (error) => {
      if (!!error) {
        return res.status(400).send({
          success: false,
          error: { message: `Произошла ошибка. Просим повторить попытку` },
        });
      } else {
        return res.status(200).send({
          success: true,
          error: false,
        });
      }
    }
  );

});

module.exports = {
  passwordResetRouter: router,
};
