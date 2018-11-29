module.exports = function(app) {
  const Client = require("../controllers/client");
  const Admin = require("../controllers/admin");

  app.get("/", Client.getStatus);

  app.get("/api/v1/categories", Client.getCategories);

  app.post("/api/v1/new-subscriber", Client.postSubscriber);

  app.post("/api/v1/new-category", Admin.addCategory);
};
