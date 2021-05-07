require("dotenv").config;
const config = require("config");
const express = require("express");
const connectDB = require("./mongoDB/connectDB");
const guitarsRoute = require("./routes/guitarsRoute");
const bassesRoute = require("./routes/bassRoute");
const usersRoute = require("./routes/usersRoute");
const authRoute = require("./routes/authRoute");

if (!config.get("jwtPrivateKey")) {
  console.log("FATAL ERROR : jwtPrivateKey not defined");
  process.exit(1);
}

const app = express();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

app.use(express.json());
app.use("/api/guitars", guitarsRoute);
app.use("/api/basses", bassesRoute);
app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);

connectDB();

app.get("/", async (req, res) => {
  res.send("<h2>Music Store Api</h2>");
});

const host = process.env.HOST || "0.0.0.0";

const port = process.env.PORT || 5000;
app.listen(port, console.log(`listening to port: ${port}`));
