var db = require("../models");
const bcrypt = require('bcrypt');

module.exports = function(app) {

  app.get("/api/user/", function(req, res) {
    db.User.findAll(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/user/create", function(req, res) {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    console.log(req.body.password);
    db.User.create(req.body).then(function(dbExample) {
      res.json(1);
    });
  });


  app.post("/api/user/login", function(req, res) {
    var auth = Buffer.from(req.headers.authorization.split(" ")[1], 'base64').toString().split(':');
    var user = auth[0];
    var pass = auth[1];

    console.log(user, pass);
    db.User.findOne({where:{
      username:user
    }}).then(function(result) {
      console.log(result);
      if(result){
        var hash = result.dataValues.password;
        console.log('hash:', hash)
        if(bcrypt.compareSync(pass, hash)) {
          console.log(result);
          res.json(result.id);
          app.locals.user = result.id;
        } 
      }
      console.log('user not found');
      res.json(-1);
      app.locals.user = -1;
   
    });
  });

 
};
