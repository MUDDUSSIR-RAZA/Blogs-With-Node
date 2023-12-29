const express = require("express");
const { createUser, login } = require("../controllers/auth");
const router = express.Router();

router.post("/signUp", async (req, res) => {
  console.log("signup");
  try {
    const resp = await createUser(
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.password
    );
    res.status(200).json(resp);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.post("/login", async (req, res) => {
  try {
    const resp = await login(req.body.email, req.body.password);
    console.log(resp);
    res.status(200).json(resp);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
