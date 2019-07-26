var db = require("../models");

module.exports = function(app) {

  app.get("/api/user/", function(req, res) {
    db.User.findAll(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/user/create", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/user/login", function(req, res) {
    db.User.findOne({where:{
      username:req.body.username,
      password:req.body.password,
    }}).then(function(dbExample) {
      if(!dbExample){
        console.log('user not found');
        res.json(-1);
        app.locals.user = -1;
      }else{
        console.log(dbExample);
        res.json(dbExample);
        app.locals.user = dbExample.id;

      }
    });
  });

 
};
