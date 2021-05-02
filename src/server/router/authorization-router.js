const express = require("express");
const bcrypt = require("bcrypt");
const sendMail = require("../mailsender/mailsender");
const router = express.Router();

const User = require("../db/usersSchema");

const { generateToken } = require("../auth/generateToken");

router.post("/", async (req, res) => {
  const loginData = req.body;

  const { email, password } = loginData;

  //check if login information is provided
  for (const prop in loginData) {
    if (loginData[prop] == "") {
      return res.status(400).send({
        success: false,
        error: { message: `${prop} must not be empty` },
      });
    }
  }

  const userRecord = (await User.findOne({ personEmail: email })) || false;
  if (!userRecord) {
    return res.status(400).send({
      success: false,
      error: { message: `Такая почта не зарегистрирована` },
    });
  }

  console.log(userRecord);

  bcrypt.compare(password, userRecord.password, (error, success) => {
    console.log(error, success, !success, !error)
    if (!success) {
      return res.status(400).send({
        success: false,
        error: { message: `Не верные почта или пароль` },
      });
    }

    try {
      res.status(200).send(generateToken(req, res));
    } catch (e) {
      res.status(401).send(e);
    }
  });
});

//password recovery
router.post("/recover", async (req, res) => {
  const { email } = req.body;

  if (email === "") {
    return res.status(400).send({
      success: false,
      error: { message: `Пожалуйста, укажите электронную почту` },
    });
  }

  const recordExists = (await User.findOne({ personEmail: email })) || false;

  if (!recordExists) {
    return res.status(400).send({
      success: false,
      error: { message: `Такая почта не зарегистрирована` },
    });
  }

  const { personName, personEmail } = recordExists;

  const payload = {
    body: {
      personName: personName,
      personEmail: personEmail
    },
  };

  await sendMail(payload, res);
});

module.exports = {
  authorizationRouter: router,
};
