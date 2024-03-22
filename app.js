console.log("Web Serverni Boshlash");
const express = require("express");
const app = express();
const router = require("./router");



//1 KIRISH codes
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//2 Session codes

//3 Views codes
app.set("views", "views");
app.set("view engine", "ejs");

//4 Routing codes
app.use("/", router);

module.exports = app;
