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

exports.updateMembership = async function (MembershipParams) {
    try {
        switch (MembershipParams.MembershipPaymentStatusId) {
            case 1:
                let dateNow = new Date(Date.now()).toISOString();
                MembershipParams.MembershipStatusId = 1;
                MembershipParams.MembershipNextPaymentDate = dateNow.setMonth(dateNow.getMonth() + MembershipParams.MembershipPaymentFrequency);
                MembershipParams.MembershipLastPaymentDate = dateNow;
                break;
            case 2:
            case 3:
                MembershipParams.MembershipStatusId = 2;
                break;
        }

    } catch (error) {
        throw error;
    }
}