const Member = require("../models/Member");

let memberController = module.exports;

memberController.signup = async (req, res) => {
    try {
        console.log("POST: controller/signup requested");
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        res.json({ state: "success", data: new_member });
    } catch (error) {
        console.log(`ERROR, controller/signup, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

memberController.login = async (req, res) => {
    try {
        console.log("POST: controller/login requested");
        const data = req.body,
            member = new Member(),
            result = await member.loginData(data);

        res.json({ state: "succeed", data: result });
    
    } catch (error) {
        console.log(`ERROR, controller/login ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

memberController.logout = (req, res) => {
    console.log("GET controller/logout requested");
    res.send("Welcome to logout page");
};
