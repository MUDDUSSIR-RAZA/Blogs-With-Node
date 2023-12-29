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
    await user.save();
    console.log(user._id);
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
