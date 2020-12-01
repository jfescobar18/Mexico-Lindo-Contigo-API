/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MembershipTypes', {
    MembershipTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MembershipTypeName: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    MembershipFamilyMembersMin: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    MembershipFamilyMembersMax: {
      type: DataTypes.DECIMAL,
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
    },
    MembershipMathExpression: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MembershipTypes'
  });
};
