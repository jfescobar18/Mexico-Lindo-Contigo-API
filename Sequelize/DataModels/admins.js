/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Admins', {
    AdminId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    AdminUsername: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    AdminPassword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'Admins'
  });
};
