module.exports = function (sequelize, DataTypes) {
  var Rosters = sequelize.define("Rosters", {
    mongoId:{
      type: DataTypes.INTEGER,
      allowNull:false,
      validate:{len:[1]}
    }
  });
  Rosters.associate=function(models){
    Rosters.belongsTo(models.user,{
      foreignKey:{
        allowNull:false
      }
    });
  }
  return Rosters;
}