const User = require("../model/db/user");

exports.createUser = async (firstName, lastName, email, password) => {
  try {
    const user = new User({
      firstName,
      lastName,
      email,
      password,
      picture:
        "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?size=626&ext=jpg",
    });
    try {
      await user.save();
    } catch (err) {
      if (err.name === "ValidationError") {
        const errorMessage = err.message;
        const fieldName = Object.keys(err.errors)[0];
        const fieldErrorMessage = err.errors[fieldName].message;
        throw fieldErrorMessage;
      } else {
        throw err;
      }
    }
    return "User Successfully SigUp!";
  } catch (err) {
    throw err;
  }
};

exports.findUser = async (email) => {
  try {
    return await User.findOne({ email });
  } catch (err) {
    throw err;
  }
};
