const jwt = require('jsonwebtoken');
const { ACCESS_TOKEN_SECRET } = require('./authConstants');

const authMiddleware = (req, res, next) => {
  const authHeader = req.header('Authorization');
  const token = authHeader && authHeader.split(' ')[1];

  if(!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, ACCESS_TOKEN_SECRET, {}, (error, payload) => {
    if(error) {
      return res.sendStatus(403);
    };
    req.payload = payload;
    next();
  });
}

module.exports = {
  authMiddleware: authMiddleware
}

