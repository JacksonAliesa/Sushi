//import the orm to store functions that interact with the DB
var orm = require("../config/orm.js");


var sushiTypes = {
    selectAll: function(cb) {
        orm.selectAll("sushi", function(res){
            cb(res);
        })
    },

//these interact with the db to decide what creat/updates/delete

create: function(cols, vals, cb){
    orm.create("sushi", cols, vals, function(res){
        cb(res)
    })
},
updateOne: function(objColVals, condition, cb){
    orm.updateOne("sushi", objColVals, condition, function(res){
        cb(res);
    })
},
delete: function(condition, cb){
    orm.delete("sushi", condition, function(res){
        cb(res);
    })
}

};
//end of sushiTypes variable that stores the functions for Create update and delete

module.exports = sushiTypes;
