const HttpCodes = require("../Utils/HttpCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const StateActions = require("../DatabaseActions/StateActions");

exports.getStates = async function (req, res) {
    try {
        let states = await StateActions.getStates().catch(error => { throw error });
        return ApiResponse.send(HttpCodes.OK, res, states, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}