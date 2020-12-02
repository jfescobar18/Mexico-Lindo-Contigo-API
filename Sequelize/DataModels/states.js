/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('States', {
    StateId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StateCode: {
      type: DataTypes.CHAR(2),
      allowNull: false,
      defaultValue: ""
    },
    StateName: {
      type: DataTypes.STRING(128),
      allowNull: false,
      defaultValue: ""
    }
  }, {
    sequelize,
    tableName: 'States'
  });
};
