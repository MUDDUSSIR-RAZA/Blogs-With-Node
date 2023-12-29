const { createUser, findUser } = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (firstName, lastName, email, password) => {
  try {
    const hashPass = await bcrypt.hash(password, 12);
    return await createUser(firstName, lastName, email, hashPass);
  } catch (err) {
    if (err.name === "ValidationError") {
      throw err.errors["email"].message;
    } else {
      throw err;
    }
  }
};

exports.login = async (email, password) => {
  try {
    const user = await findUser(email);
    if (!user) {
      throw "Wrong Email!";
    }

    const result = await bcrypt.compare(password, user.password);
    if (!result) {
      throw "Wrong Password!";
    }

    let token = jwt.sign({ email }, process.env.SECRET_KEY, {
      expiresIn: "1h",
    });
    return { token };
  } catch (err) {
    throw err;
  }
};
