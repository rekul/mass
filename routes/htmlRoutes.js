var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.User.findAll({}).then(function(response) {
      res.render("index", {
        msg: "Select a User:",
        users: response
      });
    });
  });
  app.get("/create", function(req, res) {
    res.render("createUser", {});
  });

  // Load example page and pass in an example by id
  app.get("/profile/:id", function(req, res) {
    db.User.findOne({ where: { id: req.params.id } }).then(function(response) {
      res.render("user", {
        user: response
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
