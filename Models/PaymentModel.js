const HttpCodes = require("../Utils/HttpCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const stripe = require('stripe')(process.env.STRIPE_PRIVATE);
const MembershipActions = require("../DatabaseActions/MembershipActions");
const UserActions = require("../DatabaseActions/UserActions");

exports.payFirstTimeMembership = async function (req, res) {
    try {
        const membershipInformation = await MembershipActions.getMembershipInformationByUserId(req.body.UserId).catch(error => { throw error });

        stripe.customers.create({
            email: membershipInformation.UserEmail,
            source: req.body.stripeToken,
            name: membershipInformation.UserFullName,
            address: req.body.address
            // address: {
            //     line1: req.body.address.line1,
            //     postal_code: req.body.address.postal_code,
            //     city: req.body.address.city,
            //     state: req.body.address.states,
            //     country: req.body.address.country,
            // }
        }).then((customer) => {
            UserActions.updateUser({ UserStripeId: customer.id }, req.body.UserId).catch(error => { throw error });

            return stripe.charges.create({
                amount: membershipInformation.MembershipCost,
                description: membershipInformation.MembershipTypeName,
                currency: 'USD',
                customer: customer.id
            });
        }).then((charge) => {
            return ApiResponse.send(HttpCodes.OK, res, { Id: charge.id }, null);
        }).catch((err) => {
            return ApiResponse.send(HttpCodes.BAD_REQUEST, res, err, null);
        });

        return ApiResponse.send(HttpCodes.OK, res, paymentIntent, null);
    } catch (error) {
        return ApiResponse.send(HttpCodes.BAD_REQUEST, res, error.message, null);
    }
}