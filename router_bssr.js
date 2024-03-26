const express = require("express");
const router_bssr = express.Router();
const storeController = require("./controllers/storeController");

/********************************
 *            BSSR EJS         *
 *******************************/

// member related routers (methods)
router_bssr.get("/signup", storeController.getSignupMyStore);
router_bssr.post("/signup", storeController.signupProcess);

router_bssr.get("/login", storeController.getLoginMyStore);
router_bssr.post("/login", storeController.loginProcess);

router_bssr.get("/logout", storeController.logout);

// other routers (methods)
router_bssr.get("/menu", (req, res) => {
    res.send("Welcome to Menu Page");
});

router_bssr.get("/community", (req, res) => {
    res.send("Welcome to Community Page");
});

module.exports = router_bssr;
