/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MembershipStatus', {
    MembershipStatusId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MembershipStatusName: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MembershipStatus'
  });
};
