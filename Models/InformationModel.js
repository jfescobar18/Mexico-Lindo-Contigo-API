const HttpCodes = require("../Utils/HttpCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const StateActions = require("../DatabaseActions/StateActions");
const Formatters = require("../Utils/Formatters");

exports.getStates = async function (req, res) {
    try {
        let states = await StateActions.getStates().catch(error => { throw error });
        return ApiResponse.send(HttpCodes.OK, res, states, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.validateCURP = async function (req, res) {
    try {
        let CURPPattern = /^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/
        let CURP = req.params.CURP;
        let match = CURP.match(CURPPattern);

        let response = {};

        if (match != null) {
            response = {
                status: HttpCodes.OK,
                birthDate: Formatters.getDateFromCURP(CURP)
            };
        }
        else {
            response = {
                status: HttpCodes.FORBIDDEN,
                birthDate: null
            };
        }

        return ApiResponse.send(HttpCodes.OK, res, response, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}