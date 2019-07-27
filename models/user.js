module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: {
    	type:DataTypes.TEXT,
    	default:'password',
    }
  });
  return User;
};
