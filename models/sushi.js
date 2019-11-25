//import the orm to store functions that interact with the DB
var orm = require("../config/orm");


var sushiTypes = {
    all: function(cb) {
        orm.all("sushi", function(res){
            cb(res);
        })
    },

//these interact with the db to decide what creat/updates/delete

create: function(col, vals, cb){
    orm.create("sushi", col, vals, function(res){
        cb(res)
    })
},
update: function(objColVals, condition, cb){
    orm.update("sushi", objColVals, condition, function(res){
        cb(res);
    })
},
delete: function(condition, cb){
    orm.delete("sushi", condition, function(res){
        cb(res);
    })
}

}
//end of sushiTypes variable that stores the functions for Create update and delete
