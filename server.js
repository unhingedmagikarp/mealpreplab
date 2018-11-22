const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));

// Pug js
app.set("views", path.join(__dirname, "views"));
app.use(express.static("views"));
app.set("view engine", "pug");

require("./app/routes.js")(app);

app.listen(port);
