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
    MembershipStatusId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'membershipstatus',
        },
        key: 'MembershipStatusId'
      }
    },
    MembershipUniqueCode: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    MembershipTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'membershiptypes',
        },
        key: 'MembershipTypeId'
      }
    },
    MembershipPaymentTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'membershippaymenttypes',
        },
        key: 'MembershipPaymentTypeId'
      }
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
      allowNull: false,
      references: {
        model: {
          tableName: 'membershippaymentstatus',
        },
        key: 'MembershipPaymentStatusId'
      }
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
