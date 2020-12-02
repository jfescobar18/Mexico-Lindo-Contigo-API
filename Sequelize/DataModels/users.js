/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Users', {
    UserId: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    UserCURP: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UserFirstName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UserLastName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UserSurname: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    UserBirthDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    UserGenderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'UserGenders',
        },
        key: 'UserGenderId'
      }
    },
    StateId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: {
          tableName: 'States',
        },
        key: 'StateId'
      }
    },
    UserTypeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: {
          tableName: 'UserTypes',
        },
        key: 'UserTypeId'
      }
    },
    UserMemberAlias: {
      type: DataTypes.STRING(125),
      allowNull: false
    },
    Username: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UserEmail: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UserPhone: {
      type: DataTypes.STRING(125),
      allowNull: true
    },
    UserPassword: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    UserConfirmed: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: 0
    },
    CreationDate: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    LastModified: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Users'
  });
};
