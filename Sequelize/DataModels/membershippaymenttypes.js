/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MembershipPaymentTypes', {
    MembershipPaymentTypeId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    MembershipPaymentTypeName: {
      type: DataTypes.STRING(125),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'MembershipPaymentTypes'
  });
};
