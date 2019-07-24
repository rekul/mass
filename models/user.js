module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    username: DataTypes.STRING,
    password: {
      defaultValue: "password",
      type: DataTypes.STRING
    }
  });

  User.associate = function(models) {
    User.hasMany(models.Max, {
      onDelete: "cascade"
    });
  };
  return User;
};
