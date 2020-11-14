/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sellers', {
    SellerId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SellerFirstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SellerLastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SellerUsername: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    SellerPassword: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    LastModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'sellers'
  });
};
