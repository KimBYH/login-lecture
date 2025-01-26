const express = require("express");

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

const POST = 3000;

const home = require("./routes/home");
app.use("/", home);

module.exports = app;
