const HttpCodes = require("../Utils/HttpCodes");
const ResponseCodes = require("../Utils/ResponseCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const TokenService = require("../Utils/TokenService");
const Cryptography = require("../Utils/Cryptography");
const SellerActions = require("../DatabaseActions/SellerActions");
const AdminActions = require("../DatabaseActions/AdminActions");

exports.adminLogin = async function (req, res) {
    try {
        let admin = await AdminActions.getAdminByUsername(req.body.AdminUsername).catch(error => { throw error });

        if (admin !== null && await Cryptography.comparePassword(req.body.AdminPassword, admin.AdminPassword)) {
            return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.AuthenticatedAdmin, TokenService.createToken(admin, 15));
        }
        else {
            return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.InvalidCredentials, null);
        }
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.sellerSingUp = async function (req, res) {
    let seller = await SellerActions.getSellerByUsername(req.body.SellerUsername).catch(error => { throw error });

    if (seller === null) {
        seller = await SellerActions.addSeller(req.body).catch(error => { throw error });
        return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.SellerInserted, null);
    }
    else {
        return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.SellerNotInserted, null);
    }
}

exports.sellerLogin = async function (req, res) {
    try {
        let seller = await SellerActions.getSellerByUsername(req.body.SellerUsername).catch(error => { throw error });

        if (seller !== null && await Cryptography.comparePassword(req.body.SellerPassword, seller.SellerPassword) && seller.UserTypeId === 1) {
            return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.AuthenticatedSeller, TokenService.createToken(seller, 365));
        }
        else {
            return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.InvalidCredentials, null);
        }
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.userLogin = async function (req, res) {
    try {
        let user = await SellerActions.getUserByEmail(req.body.UserEmail).catch(error => { throw error });

        if (user !== null && await Cryptography.comparePassword(req.body.UserPassword, main.UserPassword)) {
            return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.AuthenticatedUser, TokenService.createToken(user, 365));
        }
        else {
            return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.InvalidCredentials, null);
        }
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}

exports.isTokenActive = async function (req, res) {
    return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.Hello, null);
}