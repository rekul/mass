var db = require("../models");

module.exports = function(app) {
  app.get("/api/user", function(req, res) {
    db.User.findAll({}).then(function(response) {
      res.json(response);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(response) {
      res.json(response);
    });
  });

  app.get("/api/user/:id/max", function(req, res) {
    db.User.findAll({ where: { UserId: req.params.id } }).then(function(
      response
    ) {
      res.json(response);
    });
  });
};
