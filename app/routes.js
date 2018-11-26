module.exports = function(app) {
  const Client = require("../controllers/client");

  app.get("/", Client.getStatus);

  app.get("/cats", Client.getCategories);
};
