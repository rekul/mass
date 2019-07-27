var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    res.render("index", {
      msg: "Welcome!",
      id: app.locals.user,
    });
  });  

  app.get("/login", function(req, res) {
      res.render("login", {});
  });  
  app.get("/create", function(req, res) {
      res.render("createUser", {});
  });

  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
