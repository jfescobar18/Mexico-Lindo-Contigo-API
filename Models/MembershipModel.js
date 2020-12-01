const HttpCodes = require("../Utils/HttpCodes");
const ResponseCodes = require("../Utils/ResponseCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const MembershipActions = require("../DatabaseActions/MembershipActions");

exports.getMembershipType = async function (req, res) {
    try {
        let membershipType = await MembershipActions.getMembershipByMembershipFamilyMembers(req.params.MembershipFamilyMembers).catch(error => { throw error });
        if (membershipType !== null) {
            return ApiResponse.send(HttpCodes.OK, res, membershipType, null);
        }
        else {
            return ApiResponse.send(HttpCodes.BAD_REQUEST, res, ResponseCodes.MembershipTypeNotFound, null);
        }
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.addFamily = async function (req, res) {
    try {
        let users = [];
        for (const userParams of req.body.Family) {
            let user = await MembershipActions.addUser(userParams).catch(error => { throw error });
            users.push(user);
        }
        return ApiResponse.send(HttpCodes.OK, res, users[0], null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.addNewMembership = async function (req, res) {
    try {
        let membership = await MembershipActions.addNewMembership(membershipParams).catch(error => { throw error });
        return ApiResponse.send(HttpCodes.OK, res, membership, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}