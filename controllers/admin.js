const Category = require("../models/category");

exports.getStatus = (req, res, next) => {
  res.sendStatus(200);
};

exports.addCategory = (req, res, next) => {
  Category.create(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch(err => {
      console.log(err);
    });
};
