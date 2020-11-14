/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('membershiptypes', {
    MembershipTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MemberShipTypeName: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    MembershipTypeMonthlyCost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    MembershipTypeHalfYearlyCost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    MembershipTypeYearlyCost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    MembershipAdministrativeCost: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'membershiptypes'
  });
};
