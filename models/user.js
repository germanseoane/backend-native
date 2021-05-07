const mongoose = require("mongoose");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const config = require("config");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    min: 4,
    max: 250,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 1024,
  },
});

userSchema.methods.generateAuthToken = function () {
  const token = jwt.sign(
    { _id: this._id, email: this.email, name: this.name },
    config.get("jwtPrivateKey")
  );
  return token;
};

const User = mongoose.model("user", userSchema);

const validateUser = (user) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().min(4).max(250).required().email(),
    password: Joi.string().min(5).max(255).required(),
  });

  return schema.validate(user);
};

exports.User = User;
exports.validateUser = validateUser;
