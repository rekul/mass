var db = require("../models");

module.exports = function(app) {
  app.get("/api/max", function(req, res) {
    db.Max.findAll({}).then(function(response) {
      res.json(response);
    });
  });

  app.post("/api/max", function(req, res) {
    db.Max.create(req.body).then(function(response) {
      res.json(response);
    });
  });

  app.get("/api/user/:id/max", function(req, res) {
    db.Max.findAll({ where: { UserId: req.params.id } }).then(function(
      response
    ) {
      res.json(response);
    });
  });
};
