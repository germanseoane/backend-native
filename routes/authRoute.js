const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Joi = require("joi");
const { User } = require("../models/user");

router.post("/", async (req, res) => {
  try {
    const result = validateUser(req.body);
    if (result.error) {
      res.status(400).send(result.error.message);
      return;
    }
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ error: "Invalid email or password" });
    }
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }
    const token = user.generateAuthToken();

    res.send(token);
  } catch (err) {
    console.error(err);
  }
});

const validateUser = (req) => {
  const schema = Joi.object({
    email: Joi.string().min(4).max(250).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(req);
};

module.exports = router;
