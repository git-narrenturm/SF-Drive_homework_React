const jwt = require('jsonwebtoken');
const { REFRESH_TOKEN_SECRET } = require('./authConstants');

const verifyRereshToken = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  jwt.verify(token, REFRESH_TOKEN_SECRET, {}, (err) => {
    if(err) {
      return res.sendStatus(405);
    }
    next();
  })
}

module.exports = {
  verifyRereshToken: verifyRereshToken
}