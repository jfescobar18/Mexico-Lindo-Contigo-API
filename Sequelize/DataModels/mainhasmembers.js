/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MainHasMembers', {
    MainUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'UserId'
      }
    },
    MemberUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'Users',
        },
        key: 'UserId'
      }
    }
  }, {
    sequelize,
    tableName: 'MainHasMembers'
  });
};
