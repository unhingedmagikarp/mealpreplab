const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const morgan = require("morgan");
const mongoose = require("mongoose");
const configDb = require("./config/database").url;
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser());

mongoose
  .connect(
    configDb,
    { useNewUrlParser: true }
  )
  .then(res => {
    console.log("Connected to database");
  })
  .catch(err => {
    console.log(err);
  });

app.use(morgan("dev"));

require("./app/routes.js")(app);

app.listen(port);
