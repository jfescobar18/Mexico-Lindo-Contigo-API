const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const config = require("../config");

const instance = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PASS, {
    host: process.env.HOST,
    dialect: "mysql",
    operatorsAliases: false,
    logging: false,
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

instance
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error(config.console.RedColor, 'Unable to connect to the database:', err);
    });

const db = {};

db.Sequelize = Sequelize;
db.instance = instance;
db.Op = Op;

db.UserGenders = require("./DataModels/usergenders")(instance, Sequelize.DataTypes);
db.UserTypes = require("./DataModels/usertypes")(instance, Sequelize.DataTypes);
db.States = require("./DataModels/states")(instance, Sequelize.DataTypes);
db.Users = require("./DataModels/users")(instance, Sequelize.DataTypes);
db.MainHasMembers = require("./DataModels/mainhasmembers")(instance, Sequelize.DataTypes);
db.Admins = require("./DataModels/admins")(instance, Sequelize.DataTypes);
db.Sellers = require("./DataModels/sellers")(instance, Sequelize.DataTypes);
db.MembershipTypes = require("./DataModels/membershiptypes")(instance, Sequelize.DataTypes);
db.MembershipPaymentTypes = require("./DataModels/membershippaymenttypes")(instance, Sequelize.DataTypes);
db.MembershipPaymentStatus = require("./DataModels/membershippaymentstatus")(instance, Sequelize.DataTypes);
db.MembershipStatus = require("./DataModels/membershipstatus")(instance, Sequelize.DataTypes);
db.POS = require("./DataModels/pos")(instance, Sequelize.DataTypes);
db.Memberships = require("./DataModels/memberships")(instance, Sequelize.DataTypes);
db.Sells = require("./DataModels/sells")(instance, Sequelize.DataTypes);
db.MembershipInformation = require("./DataModels/membershipinformation")(instance, Sequelize.DataTypes);

db.instance.sync({ force: false })
    .then(() => {
        console.log("sync is completed");
    }).catch(err => {
        console.error(config.console.RedColor, 'Unable to sync the database:', err);
    });

module.exports = db;