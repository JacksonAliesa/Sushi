var express = require("express");
//need this imported to use its DB functions
var sushi = require("../models/sushi.js")

//creating the router variable to set up the logic within each route 
var router = express.Router();

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    sushi.selectAll(function(data) {
      var hbsObject = {
        sushi: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
     
    });
  });

  router.post("/api/sushi", function(req, res){
    sushi.insertOne(
      ["sushi_name", "devoured"],
      [req.body.sushi_name, req.body.devoured],
      function(result){
        res.json({ id: result.insertId})
      }
    )
  });

  router.put("/api/sushi/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    sushi.update({
      sushi_name: req.body.sushi_name
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });

  router.delete("/api/sushi/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    sushi.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;































// Export routes for server.js to use.
module.exports = router;

