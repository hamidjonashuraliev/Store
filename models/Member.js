const MemberModel = require("../schema/member.model");
const Definer = require("../lib/mistake");
const assert = require("assert");
const bcrypt = require("bcryptjs");

class Member {
    constructor() {
        this.memberModel = MemberModel;
    }

    async signupData(input) {
        try {
            const salt = await bcrypt.genSalt();
            input.mb_password = await bcrypt.hash(input.mb_password, salt);

            const new_member = new this.memberModel(input);

            let result;
            try {
                result = await new_member.save();
            } catch (mongo_error) {
                console.log(mongo_error);
                throw new Error(Definer.auth_err1);
            }
            console.log(result);
            result.mb_password = "";

            return result;
        } catch (error) {
            throw error;
        }
    }

    async loginData(input) {
        try {
            const member = await this.memberModel
                .findOne(
                    { mb_nick: input.mb_nick },
                    { mb_nick: 1, mb_password: 1 }
                )
                .exec();
            assert.ok(member, Definer.auth_err3);
            
            
            const isMatch = await bcrypt.compare(
                input.mb_password,
                member.mb_password
            );
            assert.ok(isMatch, Definer.auth_err4);

            return await this.memberModel
                .findOne({
                    mb_nick: input.mb_nick 
                })
                .exec();
        } catch (error) {
            throw error;
        }
    }
}
module.exports = Member;
