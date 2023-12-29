const {
  createBlog,
  findBlog,
  deleteBlog,
  editBlog,
  getBlog,
} = require("../model/blog");
const {} = require("../model/user");

exports.createBlog = async (author, title, description) => {
  try {
    const resp = await createBlog(author, title, description);
    return resp;
  } catch (err) {
    throw err;
  }
};

exports.getBlog = async (_id) => {
  try {
    const resp = await getBlog(_id);
    return resp;
  } catch (err) {
    throw err;
  }
};

exports.deleteBlog = async (id) => {
  try {
    return await deleteBlog(id);
  } catch (err) {
    throw err;
  }
};

exports.editBlog = async (id, title, description) => {
  try {
    return await editBlog(id, title, description);
  } catch (err) {
    throw err;
  }
};
