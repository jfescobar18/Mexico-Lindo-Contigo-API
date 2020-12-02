const express = require("express");
const router = express.Router();
const Membership = require("../Models/MembershipModel");
const User = require("../Models/UserModel");

var routes = function () {
    router.route("/get-membership-type")
        .post(Membership.getMembershipType);

    router.route("/add-family")
        .post(User.addFamily);

    router.route("/add-new-membership")
        .post(Membership.addNewMembership);
    return router;
};

module.exports = routes;