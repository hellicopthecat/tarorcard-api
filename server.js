"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var path_1 = require("path");
var cors_1 = require("cors");
var PORT = 8080;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use("/static", express_1.default.static("/public"));
app.get("/", function (req, res) {
    res.send("Read README.md");
});
app.get("/card/major", function (req, res) {
    var majorCardPath = path_1.default.join(__dirname, "./src/cards/major_card.json");
    res.json(require(majorCardPath));
});
app.get("/card/minor/cups", function (req, res) {
    var cupsCardPath = path_1.default.join(__dirname, "./src/cards/minor_cups.json");
    res.json(require(cupsCardPath));
});
app.get("/card/minor/sword", function (req, res) {
    var swordCardPath = path_1.default.join(__dirname, "./src/cards/minor_sword.json");
    res.json(require(swordCardPath));
});
app.get("/card/minor/wand", function (req, res) {
    var wandCardPath = path_1.default.join(__dirname, "./src/cards/minor_wand.json");
    res.json(require(wandCardPath));
});
app.get("/card/minor/pentacle", function (req, res) {
    var pentacleCardPath = path_1.default.join(__dirname, "./cards/minor_pentacle.json");
    res.json(require(pentacleCardPath));
});
var serverListen = function () {
    console.log("Server is Connecting  http://localhost:8080 ✅");
};
app.listen(PORT, serverListen);
