const db = require("../Sequelize/database");

exports.getMembershipByMembershipFamilyMembers = async function (MembershipFamilyMembers) {
    try {
        const membershipType = await db.MembershipTypes.findAll({
            where: {
                [db.Op.and]: [
                    {
                        MembershipFamilyMembersMin: {
                            [db.Op.lte]: MembershipFamilyMembers
                        }
                    },
                    {
                        MembershipFamilyMembersMax: {
                            [db.Op.gte]: MembershipFamilyMembers
                        }
                    }
                ]
            }
        });

        return membershipType.length > 0 ? membershipType[0].dataValues : null;
    }
    catch (error) {
        throw error;
    }
}

exports.addUser = async function (userParams) {
    try {
        const user = db.Users.build({
            UserCURP: userParams.UserCURP,
            UserFirstName: userParams.UserFirstName,
            UserLastName: userParams.UserLastName,
            UserSurname: userParams.UserSurname,
            UserBirthDate: userParams.UserBirthDate,
            UserGenderId: userParams.UserGenderId,
            UserTypeId: userParams.UserTypeId,
            UserMemberAlias: userParams.UserMemberAlias,
            UserEmail: userParams.UserEmail,
            UserPhone: userParams.UserPhone
        });

        await user.save();
        return user;
    }
    catch (error) {
        throw error;
    }
}

exports.addNewMembership = async function (membershipParams) {
    try {
        const membership = db.Memberships.build({
            UserId: membershipParams.UserId,
            MembershipStatusId: 2,
            MembershipTypeId: membershipParams.MembershipTypeId,
            MembershipPaymentTypeId: membershipParams.MembershipPaymentTypeId,
            MembershipPaymentFrequency: membershipParams.MembershipPaymentFrequency,
            MembershipPaymentStatusId: 2
        });

        await membership.save();
        return membership;
    }
    catch (error) {
        throw error;
    }
}