/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('POS', {
    POSId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    POSName: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    POSAddress: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'POS'
  });
};
