module.exports = function(sequelize, DataTypes) {
  var Max = sequelize.define("Max", {
    weight: DataTypes.INTEGER,
    reps: DataTypes.INTEGER
  });

  Max.associate = function(models) {
    Max.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    Max.belongsTo(models.Movement, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Max;
};
