const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../Utils/AuthMiddleware");
const Membership = require("../Models/MembershipModel");
const User = require("../Models/UserModel");

var routes = function () {
    router.route("/get-user-information/:UserPhone")
        .get(AuthMiddleware.ensureAuthenticated, User.getUserInformation);

    router.route("/add-user-password")
        .post(AuthMiddleware.ensureAuthenticated, User.addUserPassword);

    router.route("/update-payment-status")
        .post(AuthMiddleware.ensureAuthenticated, Membership.updatePaymentStatus);
    return router;
};

module.exports = routes;