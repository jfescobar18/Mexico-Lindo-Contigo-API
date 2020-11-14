var ResponseCodes = {}

ResponseCodes.AuthenticatedAdmin = { name: "AuthenticatedAdmin", code: 1 };
ResponseCodes.SellerInserted = { name: "SellerInserted", code: 2 };
ResponseCodes.SellerNotInserted = { name: "SellerNotInserted", code: 3 };
ResponseCodes.AuthenticatedSeller = { name: "AuthenticatedSeller", code: 4 };
ResponseCodes.InvalidCredentials = { name: "InvalidCredentials", code: 5 };
ResponseCodes.AuthHeaderMissed = { name: "AuthHeaderMissed", code: 6 };
ResponseCodes.Hello = { name: "Hello User", code: 999 };

module.exports = ResponseCodes;