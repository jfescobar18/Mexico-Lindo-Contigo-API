const HttpCodes = require("../Utils/HttpCodes");
const ResponseCodes = require("../Utils/ResponseCodes");
const GenericResponse = require("../Controllers/GenericResponse");

exports.singUp = async function (req, res) {
    return GenericResponse.send(HttpCodes.OK, res, ResponseCodes.Hello, Token);
}