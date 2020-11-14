var ResponseCodes = {}

ResponseCodes.SellerInserted = { name: "SellerInserted", code: 1 };
ResponseCodes.SellerNotInserted = { name: "SellerNotInserted", code: 2 };
ResponseCodes.AuthenticatedSeller = { name: "AuthenticatedSeller", code: 3 };
ResponseCodes.InvalidCredentials = { name: "InvalidCredentials", code: 4 };
ResponseCodes.Hello = { name: "Hello User", code: 999 };

module.exports = ResponseCodes;