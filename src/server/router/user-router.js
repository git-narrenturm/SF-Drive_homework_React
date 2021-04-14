const express = require('express');
const bcrypt = require('bcrypt');
const salt = 10;

const router = express.Router();

const User = require('../db/usersSchema');

router.get('/', async (req, res) => {
  const data = await User.find();
  res.send(data);
})

router.post('/', async (req, res) => {

  console.log(req.body);

  const userData = req.body;

  for (const prop in userData) {
    if (userData[prop] == "") {
      console.log(`${prop} must not be empty`);
      return res.status(400).send({
        success: false,
        error: { message: `${prop} must not be empty` }
      });
    }
  }

  const { personEmail, password } = userData;

  //TODO check data ?

  //email must be unique

  const recordExists = await User.findOne({ personEmail }) || false;
  if (!!recordExists) {
    return res.status(400).send({
      success: false,
      error: { message: `User exists` }
    });
  }

  //password hashing
  userData.password = bcrypt.hashSync(password, bcrypt.genSaltSync(salt));

  //adding user to DB
  const newUser = new User(userData);
  await newUser.save()
    .then(() => {
      res.status(201).send({
        success: true,
        error: false
      });
    })
    .catch((err) => {
      res.status(400).send({
        success: false,
        error: { message: `Cannot proceed request` }
      });
    });

})

module.exports = {
  usersRouter: router
}
