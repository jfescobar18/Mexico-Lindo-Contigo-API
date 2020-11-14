const db = require("../Sequelize/database");

exports.getAdminByUsername = async function (AdminUsername) {
    try {
        const admin = await db.Admins.findAll({
            where: {
                AdminUsername: {
                    [db.Op.eq]: AdminUsername
                }
            }
        });

        return admin.length > 0 ? admin[0].dataValues : null;
    }
    catch (error) {
        throw error;
    }
}