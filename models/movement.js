module.exports = function(sequelize, DataTypes) {
  var Movement = sequelize.define("Movement", {
    name: DataTypes.STRING
  });

  Movement.associate = function(models) {
    Movement.hasMany(models.Max, {
      onDelete: "cascade"
    });
  };
  return Movement;
};
