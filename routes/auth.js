const express = require("express");
const { createUser, login } = require("../controllers/auth");
const router = express.Router();

router.post("/signUp", async (req, res) => {
  try {
    const resp = await createUser(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    );
    res.status(200).json(resp);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const resp = await login(req.body.email, req.body.password);
    res.status(200).cookie("token", resp
    // , {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // }
    );
    res.status(200).json(resp);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
