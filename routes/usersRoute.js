const express = require("express");
const config = require("config");
const jwt = require("jsonwebtoken");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { User, validateUser } = require("../models/user");

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});

router.post("/", async (req, res) => {
  try {
    const result = validateUser(req.body);
    if (result.error) {
      res.status(400).send(result.error.message);
      return;
    }
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("User already registered");
    }

    user = new User({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);

    await user.save();
    const token = user.generateAuthToken();

    res.header("x-auth-token", token).send(user);
  } catch (err) {
    console.error(err);
  }
});

module.exports = router;
