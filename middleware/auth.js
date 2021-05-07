const jwt = require("jsonwebtoken");
const config = require("config");
const { response } = require("express");

function auth(req, res, next) {
  const token = req.header("x-auth-token");
  if (!token) {
    res.status(401).send("Access denied. No token provided.");
    return;
  }
  try {
    const decoded = jwt.verify(token, config.get("jwtPrivateKey"));
    req.user = decoded;
    next();
  } catch (ex) {
    response.status(400).send("Invalid token.");
  }
}

module.exports = auth;
