const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../Utils/AuthMiddleware");
const Membership = require("../Models/MembershipModel");

var routes = function () {
    router.route("/get-membership-type")
        .post(Membership.getMembershipType);

    router.route("/add-family")
        .post(Membership.addFamily);

    router.route("/add-new-membership")
        .post(Membership.addNewMembership);
    return router;
};

module.exports = routes;