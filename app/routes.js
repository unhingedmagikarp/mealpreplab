module.exports = function(app) {
  const Client = require("../controllers/client");

  app.get("/", Client.getStatus);
};
