const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verify = (req, res, next) => {
  const { token } = req.headers;

  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      res.json("un Authorized");
      return;
    }
    req.email = decoded.email;
    next();
  });
};
