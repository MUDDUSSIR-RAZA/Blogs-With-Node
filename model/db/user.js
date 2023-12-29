const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {type : String },
  lastName: String,
  email: {
    type: String,
    unique: true,
    validate: {
      validator: async function (email) {
        const existingUser = await this.constructor.findOne({ email });
        return !existingUser;
      },
      message: "Email already exists!",
    },
  },
  password: String,
  picture: String,
  blogs: [{ type: Schema.Types.ObjectId, ref: "Blog" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
