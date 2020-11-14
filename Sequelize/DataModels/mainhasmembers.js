/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mainhasmembers', {
    MainUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'UserId'
      }
    },
    MemberUserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'users',
        },
        key: 'UserId'
      }
    }
  }, {
    sequelize,
    tableName: 'mainhasmembers'
  });
};
