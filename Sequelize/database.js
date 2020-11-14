const Sequelize = require("sequelize");
const { Op } = require("sequelize");
const config = require("../config");

const instance = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
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

db.Admins = require("./DataModels/admins")(instance, Sequelize.DataTypes);
db.Sellers = require("./DataModels/sellers")(instance, Sequelize.DataTypes);

db.instance.sync({ force: false })
    .then(() => {
        console.log("sync is completed");
    }).catch(err => {
        console.error(config.console.RedColor, 'Unable to sync the database:', err);
    });

module.exports = db;