const Category = require("../models/category");

exports.getStatus = (req, res, next) => {
  res.sendStatus(200);
};

exports.getCategories = (req, res, next) => {
  Category.find({})
    .then(response => {
      console.log(response);
      res.json(response).status(200);
    })
    .catch(err => {
      console.log(err);
      res.sendStatus(404);
    });
};
