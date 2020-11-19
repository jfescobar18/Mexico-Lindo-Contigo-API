/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sells', {
    SellId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    SellerId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'sellers',
        },
        key: 'SellerId'
      }
    },
    MembershipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'memberships',
        },
        key: 'MembershipId'
      }
    },
    POSId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'sells'
  });
};
