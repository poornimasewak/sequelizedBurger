// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
    selectAll: function (tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    insertOne: function (userBurgerName, cb) {
        var queryString = "INSERT INTO burgers SET ?";
        connection.query(queryString, [{
            burger_name: userBurgerName
        }], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    updateOne: function (burgerId, cb) {
        var queryString = "UPDATE burgers SET ? WHERE ?";
        connection.query(queryString, [{
            devoured: true
        }, {
            id: burgerId
        }], function (err, res) {
            if (err) {
                throw err;
            }
            cb(res);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;