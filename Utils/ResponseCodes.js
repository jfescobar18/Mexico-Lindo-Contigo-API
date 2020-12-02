var ResponseCodes = {}

ResponseCodes.AuthenticatedAdmin = { name: "AuthenticatedAdmin", code: 1 };
ResponseCodes.SellerInserted = { name: "SellerInserted", code: 2 };
ResponseCodes.SellerNotInserted = { name: "SellerNotInserted", code: 3 };
ResponseCodes.AuthenticatedUser = { name: "AuthenticatedUser", code: 4 };
ResponseCodes.AuthenticatedSeller = { name: "AuthenticatedSeller", code: 5 };
ResponseCodes.InvalidCredentials = { name: "InvalidCredentials", code: 6 };
ResponseCodes.AuthHeaderMissed = { name: "AuthHeaderMissed", code: 7 };
ResponseCodes.MembershipTypeNotFound = { name: "MembershipTypeNotFound", code: 8 };
ResponseCodes.FamilyInserted = { name: "FamilyInserted", code: 9 };
ResponseCodes.NewMembershipAdded = { name: "NewMembershipAdded", code: 10 };
ResponseCodes.UserNotFound = { name: "UserNotFound", code: 11 };
ResponseCodes.UserInformation = { name: "UserInformation", code: 12 };
ResponseCodes.UserUpdated = { name: "UserUpdated", code: 13 };
ResponseCodes.MembershipUpdated = { name: "MembershipUpdated", code: 14 };
ResponseCodes.Hello = { name: "Hello User", code: 9999 };

module.exports = ResponseCodes;