const HttpCodes = require("../Utils/HttpCodes");
const ApiResponse = require("../Controllers/ApiResponse");
const stripe = require('stripe')(process.env.STRIPE_PRIVATE);

exports.payFirstTimeMembership = async function (req, res) {
    try {
        stripe.customers.create({
            email: req.body.stripeEmail,
            source: req.body.stripeToken,
            name: req.body.name,
            address: req.body.address
            // address: {
            //     line1: req.body.address.line1,
            //     postal_code: req.body.address.postal_code,
            //     city: req.body.address.city,
            //     state: req.body.address.states,
            //     country: req.body.address.country,
            // }
        }).then((customer) => {
            return stripe.charges.create({
                amount: 7000,
                description: 'Web Development Product',
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