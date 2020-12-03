module.exports = function (sequelize, DataTypes) {
  return sequelize.define('MembershipInformation', {
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    UserFullName: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    UserPhone: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MembershipId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MembershipStatusId: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MembershipUniqueCode: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MembershipPaymentFrequency: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    MembershipCost: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true
    },
    MembershipTypeName: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MembershipPaymentTypeName: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MembershipPaymentStatusName: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MembershipDaysUntillNextPayment: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'MembershipInformation'
  });
};
