module.exports = function(app) {
  app.get("/", (req, res) => {
    res
      .set("Cache-Control", "max-age=604800")
      .status(200)
      .render("homepage");
  });
};
