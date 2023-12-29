const express = require("express");
const { createBlog, deleteBlog, editBlog } = require("../controllers/blogs");
const router = express.Router();

router.post("/publish", async (req, res) => {
  try {
    const resp = await createBlog(req.body.author , req.body.title, req.body.description);
    res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.get("/blog", async (req, res) => {
  try {
    const resp = await createBlog(req.body.author , req.body.title, req.body.description);
    res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.delete("/delete", async (req, res) => {
  try {
    const resp = await deleteBlog(req.body.id);
    res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});


router.patch("/update", async (req, res) => {
  try {
    const resp = await editBlog(req.body.id , req.body.title , req.body.description);
    res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

module.exports = router;