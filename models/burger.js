// it contains connection to sql queries
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", function (res) {
            cb(res);
        });
    },
    insertOne: function (userBurgerName, cb) {
        orm.insertOne(userBurgerName, function (res) {
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        orm.updateOne(burgerId, function (res) {
            cb(res);
        });
    }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burger;