exports.send = async function (HttpCode, res, body, token) {
    return res.status(HttpCode).jsonp({
        "Response": body,
        "Token": token
    });
}