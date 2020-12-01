/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sells', {
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
          tableName: 'Sellers',
        },
        key: 'SellerId'
      }
    },
    MembershipId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Memberships',
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
    tableName: 'Sells'
  });
};
