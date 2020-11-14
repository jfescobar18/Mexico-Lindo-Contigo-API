/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('memberships', {
    MembershipId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MembershipUniqueCode: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    MembershipTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MembershipPaymentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MembershipPaymentFrequency: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MembershipCreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    MembershipPaymentStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    MembershipNextPaymentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    MembershipLastPaymentDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    LastModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'memberships'
  });
};
