const express = require("express");
const router = express.Router();
const Auth = require("../Models/AuthenticationModel");

var routes = function () {
    router.route("/sing-up")
        .post(Auth.singUp);
    return router;
};

module.exports = routes;