const HttpCodes = require("../Utils/HttpCodes");
const ResponseCodes = require("../Utils/ResponseCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const UserActions = require("../DatabaseActions/UserActions");
const Emailer = require("../Utils/Emailer");
const EmailTypes = require("../Utils/EmailTypes");

exports.getUserInformation = async function (req, res) {
    try {
        let user = await UserActions.getUserByPhone(req.params.UserPhone).catch(error => { throw error });

        if (user !== null) {
            return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.UserInformation, null);
        }
        else {
            return ApiResponse.send(HttpCodes.FORBIDDEN, res, ResponseCodes.UserNotFound, null);
        }
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.addUserPassword = async function (req, res) {
    try {
        const UserPassword = generatePassword();

        const user = await UserActions.updateUser({ UserPassword: UserPassword }, req.params.UserId).catch(error => { throw error });
        Emailer.initMailer(user, EmailTypes.WELCOME_USER, null);
        return ApiResponse.send(HttpCodes.OK, res, { UserPassword: UserPassword }, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.addFamily = async function (req, res) {
    try {
        let users = [];
        for (const userParams of req.body.Family) {
            let user = await UserActions.addUser(userParams).catch(error => { throw error });
            users.push(user);
        }
        return ApiResponse.send(HttpCodes.OK, res, users[0], null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

function generatePassword() {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}