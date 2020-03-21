var express = require("express");
var router = express.Router();
var Event = require("../models/Event.model");
const mongoose = require('mongoose');


/* GET users listing. */
router.get("/", function(req, res, next) {
  Event.find({}, function(error, result) {
    console.log("Event Saved", result);
    res.render("events", { events: result });
  });
});

// add a new event
router.post("/", function(req, res, next) {
    var event = new Event({ 
        _id: new mongoose.Types.ObjectId(), 
        name: req.body.name,
        startDate: req.body.startDate,
        endDate: req.body.endDate,
        description: req.body.description,
    });
    event.save().then((response) => {
        console.log("Event Saved", response);
        Event.find({}, function(error, result) {
            req.flash("error", "Event wurde erfolgrech gespeichert");
            res.render("events", { events: result });
          });
    }, (error) => {
        console.log("Event not saved", error);
        Event.find({}, function(error, result) {
            req.flash("error", "Event konnte nicht gespeichert werden");
            res.render("events", { events: result });
          });
    });
});

module.exports = router;
