const nodemailer = require("nodemailer");
const EmailTypes = require("./EmailTypes");
const path = require('path');
const fs = require("fs");

exports.initMailer = function (user, emailType, token) {
    return new Promise(function (resolve, reject) {
        try {
            const email = composeEmail(user, emailType, token);
            resolve(sendEmail(user.UserEmail, email.subject, email.text, email.body));
        }
        catch (error) {
            var reason = { "error": "nodemailer error", "message": error.message }
            reject(reason);
        }
    });
}

function composeEmail(user, emailType, token) {
    try {
        let emailComposed = {};

        switch (emailType) {
            case EmailTypes.WELCOME_USER:
                emailComposed.subject = "¡Bienvenido!";
                emailComposed.text = `${user.UserFirstName} te damos la bienvenida a México Lindo Contigo, realizo tu pago y comienza a usar tu cuenta ahora`;
                emailComposed.body = fs.readFileSync(path.join(__dirname, "../Mailing/WelcomeUser.html"), "utf8");
                emailComposed.body = emailComposed.body.toString();
                emailComposed.body = emailComposed.body.addUserPassword(user, null);
                emailComposed.body = emailComposed.body.replace("{UserFirstName}", user.UserFirstName);
                break;
            default:
                break;
        }
    }
    catch (error) {
        throw new Error(error);
    }
}

Object.assign(String.prototype, {
    addUserPassword(user, token) {
        return this.replace("{UserPassword}", user.UserPassword);
    }
});

const sendEmail = async function (to, subject, text, html) {
    try {
        let config = {
            host: process.env.HOST_SMTP,
            port: process.env.NODE_ENV === "production" ? 465 : 587,
            secure: process.env.NODE_ENV === "production",
            auth: {
                user: process.env.USER_SMTP,
                pass: process.env.PASSWORD_SMTP
            }
        };

        const transporter = nodemailer.createTransport(config);

        let info = await transporter.sendMail({
            from: `México Lindo Contigo 🗃 <${process.env.USER_SMTP}>`,
            to: to,
            subject: subject,
            text: text,
            html: html,
        });

        return info;
    }
    catch (error) {
        throw { "error": error.message };
    }
}