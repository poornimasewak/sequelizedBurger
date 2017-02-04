// HTML routing code
var express = require("express");

var router = express.Router();
// var Burger = require("./Burger");

// Requiring our models
var db = require("../models");


// module.exports = function (app) {
// POST route for saving a new burger
router.post("/", function (req, res) {
    // console.log(req.body);
    db.burger.create(req.body).then(function (dbRes) {
        // res.json(dbRes);
        res.redirect("/");
    });
});

router.get("/", function (req, res) {

    db.burger.findAll({}).then(function (dbresp) {
        res.render("index", {
            burgers: dbresp
        });
        // res.redirect("/");
    });

});
// };

// PUT route for updating posts
router.put("/burgers/:burger_id", function (req, res) {
    console.log("handler");
    db.burger.findOne({
        where: {
            burger_id: req.params.burger_id
        }
    }).then(function (dbresp) {
        console.log("query");
        // res.json(dbresp);
        dbresp.update({
            devoured: true,
        }).then(function () {
            console.log("updated");
            res.redirect('/');
        });
    });
});


// Export routes for server.js to use.
module.exports = router;