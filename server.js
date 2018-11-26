const express = require("express");
const path = require("path");
const port = process.env.PORT || 8000;
const morgan = require("morgan");
const mongoose = require("mongoose");

const app = express();

app.use(morgan("dev"));

require("./app/routes.js")(app);
require("./app/admin_routes")(app);

app.listen(port);
