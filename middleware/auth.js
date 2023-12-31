const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verify = (req, res, next) => {
  const token = req.headers.cookie;
  jwt.verify(token, process.env.SECRET_KEY, function (err, decoded) {
    if (err) {
      res.status(400).json("un Authorized");
      return;
    }
    req.id = decoded.userId;
  });
  next();
};
