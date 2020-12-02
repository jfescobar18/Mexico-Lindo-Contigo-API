const TokenService = require("../../Utils/TokenService");
const AuthMiddleware = require("../../Utils/AuthMiddleware");

let Token = "";
let req = {
    headers: {
        authorization: ""
    }
};
let res = {};
let User = {
    UserId: 9999,
    UserCURP: "ABCD950101HDFRRR00",
    UserFirstName: "Consome",
    UserLastName: "Fulanito",
    UserSurname: "Simpson",
    UserBirthDate: "01-01-1995",
    UserGenderId: 1,
    UserTypeId: 1,
    UserMemberAlias: "fulanito",
    UserEmail: "fulanito@email.com",
    UserPhone: "5540554055"
};

test('Create Token', () => {
    Token = TokenService.createToken(User, 2);
    req.headers.authorization = Token;
    expect(Token).not.toBeUndefined();
});

test('Check if an use is authenticated', () => {
    let isAuthenticated = false;
    AuthMiddleware.ensureAuthenticated(req, res, function () {
        isAuthenticated = true;
    });

    expect(isAuthenticated).toBe(true);
});

test('Validate if Token is valid', () => {
    expect(AuthMiddleware.ValidateTemporalToken(Token)).toBe(true);
});