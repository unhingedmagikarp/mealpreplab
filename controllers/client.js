const Category = require("../models/category");
const Subscriber = require("../models/subscribe");

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

exports.postSubscriber = (req, res, next) => {
  const newSubscriber = new Subscriber({
    email: req.body.email
  });

  newSubscriber.save().then(item => res.json(item));
};
