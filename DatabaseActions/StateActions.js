const db = require("../Sequelize/database");

exports.getStates = async function () {
    try {
        const states = await db.States.findAll();

        return states.length > 0 ? states : null;
    }
    catch (error) {
        throw error;
    }
}