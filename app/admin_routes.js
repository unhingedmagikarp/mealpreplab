module.exports = function(app) {
  const Admin = require("../controllers/admin");

  app.post("/asd", Admin.addCategory);
};
