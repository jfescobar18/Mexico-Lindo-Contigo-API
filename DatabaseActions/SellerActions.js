const db = require("../Sequelize/database");
const Cryptography = require("../Utils/Cryptography");

exports.getSellerByUsername = async function (SellerUsername) {
    try {
        const seller = await db.Sellers.findAll({
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

exports.addSeller = async function (sellerParams) {
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
        return seller;
    }
    catch (error) {
        throw error;
    }
}