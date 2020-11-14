const jwt = require('jwt-simple');
const moment = require('moment');
const HttpCodes = require("./HttpCodes");
const ResponseCodes = require("./ResponseCodes");
const ApiResponse = require("../Controllers/ApiResponse");

exports.ensureAuthenticated = function (req, res, next) {
    if (!req.headers.authorization) {
        return ApiResponse.send(HttpCodes.FORBIDDEN, res, ResponseCodes.AuthHeaderMissed, null);
    }

    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.decode(token, process.env.TOKEN);

    if (payload.exp <= moment().unix()) {
        return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.ExpiredToken, null);
    }

    req.user = payload.sub;
    next();
}

exports.ValidateTemporalToken = function (token) {
    try {
        const payload = jwt.decode(token, process.env.TOKEN);
        return !(payload.exp <= moment().unix());
    } catch (error) {
        throw { "error": error.message }
    };
}