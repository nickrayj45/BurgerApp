var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

router.get("/", function (req, res) {
  res.redirect("/burgers");
});

// Create all our routes and set up logic within those routes where required.
router.get("/burgers", function (req, res) {
  burger.selectAll(function (burgerData) {
    var hbsObject = {
      burger: burgerData,
    };
    console.log(burger);
    res.render("index", { burger: burgerData });
  });
});

router.post("/burgers/new", function (req, res) {
  // burger.insertOne([
  //   // "burger", "devoured"

  // ],
  // [
  //   req.body.name, req.body.sleepy
  // ], function(result) {
  // Send back the ID of the new quote
  burger.insertOne(req.body.burger_type, function (result) {
    console.log(result);
    // res.json({ id: result.insertId });
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  // var condition = "id = " + req.params.id;

  // console.log("condition", condition);

  burger.updateOne(
    req.params.id,
    //   sleepy: req.body.sleepy
    // , condition,
    function (result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// router.delete("/api/burger/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   burger.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// Export routes for server.js to use.
module.exports = router;
