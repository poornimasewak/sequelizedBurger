// HTML routing code
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burger.insertOne(
        req.body.burger_name,
        function () {
            res.redirect("/");
        });
});

router.put("/:id", function (req, res) {
    var condition = req.params.id;
    // var name = req.params.burger_name;

    console.log("condition", condition);

    burger.updateOne(condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;