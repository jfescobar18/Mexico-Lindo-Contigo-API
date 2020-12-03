const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../Utils/AuthMiddleware");
const Payment = require("../Models/PaymentModel");

var routes = function () {
    router.route("/pay-first-time-membership")
        .post(AuthMiddleware.ensureAuthenticated, Payment.payFirstTimeMembership);
    return router;
};

module.exports = routes;