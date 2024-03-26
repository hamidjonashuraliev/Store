const Member = require("../models/Member");
let storeController = module.exports;

storeController.getSignupMyStore = async (req, res) => {
    try {
        console.log("GET: controller getSignupMyStore");
        res.render("signup");
    } catch (error) {
        console.log(`Error, controller signup, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.signupProcess = async (req, res) => {
    try {
        console.log("POST: controller signup");
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        res.json({ state: "succeed", data: new_member });
    } catch (error) {
        console.log(`Error, controller signup, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.getLoginMyStore = async (req, res) => {
    try {
        console.log("GET: controller getLoginMyStore");
        res.render("login-page");
    } catch (error) {
        console.log(`Error, controller getLoginMyStore, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.loginProcess = async (req, res) => {
    try {
        console.log("POST: controller login");
        const data = req.body,
            member = new Member(),
            result = await member.loginData(data);

        res.json({ state: "succeed", data: result });
    } catch (error) {
        console.log(`Error, controller login, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.logout = (req, res) => {
    console.log("GET controller logout");
    res.send("You are in logout section");
};
