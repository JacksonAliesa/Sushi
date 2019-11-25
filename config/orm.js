//this is importing the mySQL connection to reach the DB info on connection.js
//logic of whole application will be on this pg
var connection = require("../config/connection")

//these functions will help us retrieve and store data in the DB
// Object for all our SQL statement functions found on sushi.js

function selectAll(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, result) {
        if (err) {
            throw err;
        }
        cb(res);
    });
};

function insertOne(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + "(" + cols.toString() + ")" + "VALUES ??" + vals + ") ";
    console.log(queryString);
    connection.query(queryString, function (err, result) {

        if (err) {
            throw err;
        }
        cb(res);
    });
};

function updateOne(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + "SET" + objColVals + "WHERE" + condition;
    console.log(queryString);
    connection.query(queryString, function (err, result) {

        if (err) {
            throw err;
        }
        cb(res);
    });

};

// this exports the object
module.exports = orm;