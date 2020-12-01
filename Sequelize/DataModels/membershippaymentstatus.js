/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MembershipPaymentStatus', {
    MembershipPaymentStatusId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MembershipPaymentStatusName: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MembershipPaymentStatus'
  });
};
