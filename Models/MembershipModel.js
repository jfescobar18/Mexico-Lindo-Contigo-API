const HttpCodes = require("../Utils/HttpCodes");
const ResponseCodes = require("../Utils/ResponseCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const MembershipActions = require("../DatabaseActions/MembershipActions");

exports.getMembershipType = async function (req, res) {
    try {
        let MembersMathResult = 0.0;
        for (const memberCode of req.body.MembersArray) {
            switch (memberCode.toLowerCase()) {
                case "t":
                    MembersMathResult += 10.0;
                    break;
                case "t55":
                    MembersMathResult += 20.0;
                    break;
                case "p":
                    MembersMathResult += 1.0;
                    break;
                case "h":
                    MembersMathResult += 1.1;
                    break;
                case "pa":
                    MembersMathResult += 3.1;
                    break;
                default:
                    MembersMathResult += 0;
                    break;
            }
        }

        let membershipType = await MembershipActions.getMembershipByMembershipFamilyMembers(MembersMathResult).catch(error => { throw error });
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

exports.addNewMembership = async function (req, res) {
    try {
        let membership = await MembershipActions.addNewMembership(req.body).catch(error => { throw error });
        return ApiResponse.send(HttpCodes.OK, res, membership, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.updatePaymentStatus = async function (req, res) {
    try {
        await MembershipActions.updateMembership(req.body).catch(error => { throw error });
        return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.MembershipUpdated, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}