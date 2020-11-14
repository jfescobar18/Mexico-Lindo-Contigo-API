const express = require("express");
const router = express.Router();
const Auth = require("../Models/AuthenticationModel");

var routes = function () {
    router.route("/seller-sing-up")
        .post(Auth.sellerSingUp);

    router.route("/seller-login")
        .post(Auth.sellerLogin);
    return router;
};

module.exports = routes;