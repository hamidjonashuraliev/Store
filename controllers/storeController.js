let storeController = module.exports;
const Member = require("../models/Member");

storeController.getMyStoreData = async (req, res) => {
    try {
        console.log("GET: controller/getMyStoreData");
        // TODO: Get my store products
        
        res.render("store-menu");
    } catch (error) {
        console.log(`Error, controller/getMyStoreData ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.getSignupMyStore = async (req, res) => {
    try {
        console.log("GET: controller/getSignupMyStore");
        res.render("signup");
    } catch (error) {
        console.log(`Error, controller/getSignupMyStore, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.signupProcess = async (req, res) => {
    try {
        console.log("POST: controller/signup");
        const data = req.body,
            member = new Member(),
            new_member = await member.signupData(data);

        req.session.member = new_member;
        res.redirect("/resto/products/menu");
    } catch (error) {
        console.log(`Error, controller/signup, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.getLoginMyStore = async (req, res) => {
    try {
        console.log("GET: controller/getLoginMyStore");
        res.render("login-page");
    } catch (error) {
        console.log(`Error, controller/getLoginMyStore, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.loginProcess = async (req, res) => {
    try {
        console.log("POST: controller/login");
        const data = req.body,
            member = new Member(),
            result = await member.loginData(data);

        req.session.member = result;
        req.session.save(function () {
            res.redirect("/resto/products/menu");
        });
 
    } catch (error) {
        console.log(`Error, controller/login, ${error.message}`);
        res.json({ state: "fail", message: error.message });
    }
};

storeController.logout = (req, res) => {
    console.log("GET controller/logout");
    res.send("You are in logout section");
};

storeController.checkSessions = (req, res) => {
    if (req.session?.member) {
        res.json({ state: "succeed", data: req.session.member });
    } else {
        res.json({ state: "fail", message: "You are not authenticated." });
    }
};
