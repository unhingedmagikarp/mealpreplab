const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));

app.use(express.static("Views"));

// Pug js
app.set("Views", path.join(__dirname, "Views"));
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("Home/Homepage");
});

app.listen(port);
