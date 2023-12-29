const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  title:  { type: String, required: true },
  description:  { type: String, required: true },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
