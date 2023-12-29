const Blog = require("./db/blog");
const User = require("./db/user");

exports.createBlog = async (author, title, description) => {
  console.log(author);
  try {
    const blog = new Blog({
      author,
      title,
      description,
      date: Date.now(),
    });
    await blog.save();
    // Retrieve the user with populated blogs
    const user = await User.findByIdAndUpdate(author, {
      $push: { blogs: blog._id },
    });
    return "Blog Successfully Published!";
  } catch (err) {
    throw err;
  }
};

exports.findBlog = async (id) => {
  try {
    return await Blog.findOne({ id });
  } catch (err) {
    throw err;
  }
};

exports.getBlog = async (_id) => {
  try {
    const blog = await Blog.findOne({ _id }).populate("auhtor");
    console.log(blog);
    return blog;
  } catch (err) {
    throw err;
  }
};

exports.deleteBlog = async (_id) => {
  try {
    const result = await Blog.findOneAndDelete({ _id });
    if (!result) {
      throw "Blog not Found!";
    }
    const authorId = result.author;
    await User.findByIdAndUpdate(authorId, { $pull: { blogs: _id } });
    return "Blog Successfully Deleted!";
  } catch (err) {
    throw err;
  }
};

exports.editBlog = async (id, title, description) => {
  try {
    const blog = {
      title,
      description,
      date: Date.now(),
    };
    const result = await Blog.findOneAndUpdate({ id }, blog, { new: true });
    if (!result) {
      throw "Blog not Found!";
    }
    return "Blog Successfully Updated!";
  } catch (err) {
    throw err;
  }
};
