const jwt = require("jsonwebtoken");
const {
  ACCESS_TOKEN_SECRET,
  ACCESS_TOKEN_LIFE,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_LIFE,
} = require("./authConstants");

const generateToken = (req, res) => {

  const payload = {
    email: req.body.email,
  };

  const accessToken = jwt.sign(payload, ACCESS_TOKEN_SECRET, {
    expiresIn: ACCESS_TOKEN_LIFE,
  });
  const refreshToken = jwt.sign({}, REFRESH_TOKEN_SECRET, {
    expiresIn: REFRESH_TOKEN_LIFE,
  });

  const { email } = payload;

  return { email, accessToken, refreshToken };
};

const sendToken = (req, res) => {
  const { username, accessToken, refreshToken } = generateToken(req, res);

  try {
    res.send({
      username,
      accessToken,
      refreshToken,
    });
  } catch (e) {
    res.status(401).send(e);
  }

}

module.exports = {
  sendToken: sendToken,
  generateToken: generateToken
};
