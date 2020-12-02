const express = require("express");
const router = express.Router();
const Information = require("../Models/InformationModel");

var routes = function () {
    router.route("/get-states")
        .get(Information.getStates);
    return router;
};

module.exports = routes;