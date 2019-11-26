//this is importing the mySQL connection to reach the DB info on connection.js
//logic of whole application will be on this pg
var connection = require("../config/connection.js")

//these functions will help us retrieve and store data in the DB
// Object for all our SQL statement functions found on sushi.js

// Object for all our SQL statement functions.
var orm = {
    
    selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function (err, res) {
        if (err) {
            throw err;
        }
        cb(res);
    });
},
//end of select all function

insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table + "(" + cols.toString() + ")" + "VALUES ??" + vals + ") ";
    console.log(queryString);
    connection.query(queryString, function (err, result) {

        if (err) {
            throw err;
        }
        cb(res);
    });
},
//end of insert function

updateOne: function (table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table + "SET" + objColVals + "WHERE" + condition;
    console.log(queryString);
    connection.query(queryString, function (err, res) {

        if (err) {
            throw err;
        }
        cb(res);
    });

},
//end of update function
delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, res) {
      if (err) {
        throw err;
      }

      cb(res);
    });
  }
  //end of delete function

};


// this exports the object
module.exports = orm;