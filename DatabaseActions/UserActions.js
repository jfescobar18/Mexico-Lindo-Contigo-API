const db = require("../Sequelize/database");

exports.addUser = async function (userParams) {
    try {
        const user = db.Users.build({
            UserCURP: userParams.UserCURP,
            UserFirstName: userParams.UserFirstName,
            UserLastName: userParams.UserLastName,
            UserSurname: userParams.UserSurname,
            UserBirthDate: userParams.UserBirthDate,
            UserGenderId: userParams.UserGenderId,
            StateId: userParams.StateId,
            UserTypeId: userParams.UserTypeId,
            UserMemberAlias: userParams.UserMemberAlias,
            UserEmail: userParams.UserEmail,
            UserPhone: userParams.UserPhone
        });

        await user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
}

exports.getUserByEmail = async function (UserEmail) {
    try {
        const user = await db.Users.findAll({
            where: {
                UserEmail: {
                    [db.Op.eq]: UserEmail
                }
            }
        });

        return user.length > 0 ? user[0].dataValues : null;
    }
    catch (error) {
        throw error;
    }
}

exports.getUserByPhone = async function (UserPhone) {
    try {
        const user = await db.Users.findAll({
            where: {
                UserPhone: {
                    [db.Op.eq]: UserPhone
                }
            }
        });

        return user.length > 0 ? user[0].dataValues : null;
    }
    catch (error) {
        throw error;
    }
}

exports.getUserById = async function (UserId) {
    try {
        const user = await db.Users.findAll({
            where: {
                UserId: {
                    [db.Op.eq]: UserId
                }
            }
        });

        return user.length > 0 ? user[0].dataValues : null;
    }
    catch (error) {
        throw error;
    }
}

exports.updateUser = async function (values, UserId) {
    try {
        await db.Users.update(
            values,
            {
                where: {
                    UserId: {
                        [db.Op.eq]: UserId
                    }
                }
            }
        );
    } catch (error) {
        throw error;
    }
}