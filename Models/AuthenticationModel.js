const db = require("../Sequelize/database");
const HttpCodes = require("../Utils/HttpCodes");
const ResponseCodes = require("../Utils/ResponseCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const TokenService = require("../Utils/TokenService");
const Cryptography = require("../Utils/Cryptography");

exports.sellerSingUp = async function (req, res) {
    let seller = await getSellerByUsername(req.body.SellerUsername).catch(error => { throw error });

    if (seller === null) {
        return await addSeller(req.body, res).catch(error => { throw error });
    }
    else {
        return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.SellerNotInserted, null);
    }
}

exports.sellerLogin = async function (req, res) {
    try {
        let seller = await getSellerByUsername(req.body.SellerUsername).catch(error => { throw error });

        if (seller !== null && await Cryptography.comparePassword(req.body.SellerPassword, seller.SellerPassword)) {
            return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.AuthenticatedSeller, TokenService.createToken(seller, 365));
        }
        else {
            return ApiResponse.send(HttpCodes.UNAUTHORIZED, res, ResponseCodes.InvalidCredentials, null);
        }
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error, null);
    }
}

async function getSellerByUsername(SellerUsername) {
    try {
        const seller = await db.sellers.findAll({
            where: {
                SellerUsername: {
                    [db.Op.eq]: SellerUsername
                }
            }
        });

        return seller.length > 0 ? seller[0].dataValues : null;
    }
    catch (error) {
        throw error;
    }
}

async function addSeller(sellerParams, res) {
    try {
        const seller = db.Sellers.build({
            SellerId: null,
            SellerFirstName: sellerParams.SellerFirstName,
            SellerLastName: sellerParams.SellerLastName,
            SellerUsername: sellerParams.SellerUsername,
            SellerPassword: await Cryptography.cryptPassword(sellerParams.SellerPassword),
            LastModified: null
        });

        await seller.save();
        const Token = TokenService.createToken(seller, 365);
        return ApiResponse.send(HttpCodes.OK, res, ResponseCodes.SellerInserted, Token);
    }
    catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error, null);
    }
}