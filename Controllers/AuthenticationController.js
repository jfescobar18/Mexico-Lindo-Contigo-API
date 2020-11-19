const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../Utils/AuthMiddleware");
const Auth = require("../Models/AuthenticationModel");

var routes = function () {
    router.route("/admin-login")
        .post(Auth.adminLogin);

    router.route("/seller-sing-up")
        .post(AuthMiddleware.ensureAuthenticated, Auth.sellerSingUp);

    router.route("/seller-login")
        .post(Auth.sellerLogin);

    router.route("/main-login")
        .post(Auth.userLogin);

    router.route("/is-token-active")
        .get(AuthMiddleware.ensureAuthenticated, Auth.isTokenActive);
    return router;
};

module.exports = routes;