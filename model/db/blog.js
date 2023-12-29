const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  title: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
