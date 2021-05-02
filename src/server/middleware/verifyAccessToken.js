const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('../auth/authConstants');

const verifyAccessToken = (req, res, next) => {

  const accessToken = req.header('Access-Token');

  if(!accessToken) {
    return res.sendStatus(401);
  }

  jwt.verify(accessToken, ACCESS_TOKEN_SECRET, {}, (error, payload) => {
    if(error) {
      return res.sendStatus(403);
    };
    req.payload = payload;
    next();
  });
}

module.exports = verifyAccessToken