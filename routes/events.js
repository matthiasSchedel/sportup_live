var express = require("express");
var router = express.Router();
var Event = require("../models/Event.model");
const mongoose = require("mongoose");
var moment = require("moment");

/* GET users listing. */
router.get("/", function(req, res, next) {
  indexEvent(res);
});

// add a new event
router.post("/", function(req, res, next) {
  var event = new Event({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description
  });
  event.save().then(
    response => {
      console.log("Event Saved", response);
      req.flash("error", "Event wurde erfolgreich gespeichert");
      indexEvent(res);
    },
    error => {
      console.log("Event not saved", error);
      req.flash("error", "Event konnte nicht gespeichert werden");
      indexEvent(res);
    }
  );
});

module.exports = router;

function indexEvent(res) {
  Event.find({}, function(error, result) {
    res.render("events", { events: result, moment: moment });
  });
}
