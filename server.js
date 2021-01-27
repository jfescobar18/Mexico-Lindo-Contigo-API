const numCPUs = require("os").cpus().length;
const compression = require("compression");
const bodyParser = require("body-parser");
const cluster = require("cluster");
const express = require("express");
const config = require('./config');
const dotenv = require("dotenv");
const https = require("https");
const http = require("http");
const cors = require("cors");
const path = require('path');
const fs = require("fs");

const app = express();
dotenv.config();

const shouldCompress = (req, res) => {
    if (req.headers["x-no-compression"]) {
        return false
    }
    return compression.filter(req, res);
};

app.use(cors());
app.options("*", cors());
app.use(bodyParser.json());
app.use(compression({
    filter: shouldCompress,
    level: 7,
}));

const options = process.env.NODE_ENV === "production" ? {
    key: fs.readFileSync(".ssl/private.key"),
    cert: fs.readFileSync(".ssl/certificate.crt")
} : {};

app.use(bodyParser.json({ limit: "5mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname + '/wwwroot')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, 'wwwroot', 'index.html'));
});

const AuthenticationController = require("./Controllers/AuthenticationController")();
app.use("/api/auth", AuthenticationController);

const InformationController = require("./Controllers/InformationController")();
app.use("/api/info", InformationController);

const MembershipController = require("./Controllers/MembershipController")();
app.use("/api/membership", MembershipController);

const PaymentController = require("./Controllers/PaymentController")();
app.use("/api/payment", PaymentController);

const SellerController = require("./Controllers/SellerController")();
app.use("/api/seller", SellerController);

try {
    if (cluster.isMaster) {
        console.log("Master " + process.pid + " is running");

        for (let i = 0; i < numCPUs; i++) {
            cluster.fork();
        }
        cluster.on("exit", (worker, code, signal) => {
            console.log("worker " + worker.process.pid + " died");
        });

    }
    else {
        console.log("Worker " + process.pid + " started");

        app.get("/cluster", (req, res) => {
            let worker = cluster.worker.id;
            res.send("Running on worker with id ==> " + worker);
        });

        const SwagOptions = {
            info: {
                version: '1.0.0',
                title: 'MLC',
                license: {
                    name: 'MIT',
                },
            },
            security: {
                BasicAuth: {
                    type: 'https',
                    scheme: 'basic',
                },
            },
            filesPattern: './**/*.js', // Glob pattern to find your jsdoc files (it supports arrays too ['./**/*.controller.js', './**/*.route.js'])
            swaggerUIPath: '/your-url', // SwaggerUI will be render in this url. Default: '/api-docs'
            baseDir: __dirname,
            exposeSwaggerUI: true, // Expose OpenAPI UI. Default true
            exposeApiDocs: false, // Expose Open API JSON Docs documentation in `apiDocsPath` path. Default false.
            apiDocsPath: '/v3/api-docs', // Open API JSON Docs endpoint. Default value '/v3/api-docs'.
        };

        createServer();
    }
}
catch (error) {
    console.log(config.console.RedColor, error);
}

function createServer() {
    if (process.env.NODE_ENV === "production") {
        https.createServer(options, app).listen(process.env.PORT, app.get('host'), () => {
            printServerInfo();
        });
    }
    else {
        http.createServer(app).listen(process.env.PORT, app.get("host"), () => {
            printServerInfo();
        });
    }
}

function printServerInfo() {
    var dateTime = new Date();
    var message = `Server runnning on Port:- ${process.env.PORT} Started at :- ${dateTime}`;
    console.log(config.console.greenColor, message);
}