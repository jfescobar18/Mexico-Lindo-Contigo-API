/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('UserTypes', {
    UserTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserTypeName: {
      type: DataTypes.STRING(8),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'UserTypes'
  });
};
