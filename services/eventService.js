var Event = require("../models/Event.model");
var moment = require("moment");
const mongoose = require("mongoose");

function findAll(req, res) {
  Event.find()
    .then(events => {
      res.render("events", { events: events, moment: moment });
    })
    .catch(err => {
      console.log(err);
      req.flash("error", "Events konnte nicht geladen werden");
      res.render("events", { events: [], moment: moment });
    });
}
exports.findAll = findAll;

exports.create = (req, res) => {
  var event = assignParamsToEvent(req);
  event._id = new mongoose.Types.ObjectId();

  event
    .save()
    .then(response => {
      console.log("Event Saved", response);
      req.flash("success", "Event wurde erfolgreich gespeichert");
      findAll(req, res);
    })
    .catch(err => {
      console.log(err);
      req.flash("error", "Events konnte nicht gespeichert werden");
      findAll(req, res);
    });
};

exports.findOne = (req, res) => {
  Event.findById(req.params.id)
    .then(event => {
      if (!event) {
        return eventNotFoundByIdResponse(req, res, event);
      }
      res.render("event", { event: event, moment: moment });
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "event not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete event with id " + req.params.id
      });
    });
};

// Update a Event identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    console.log("Missing Parameters", req.body);
    req.flash("error", "Fehlerhafte Parameter");
    findAll(req, res);
  }
  // Find event and update it with the request body
  Event.findByIdAndUpdate(req.params.id, assignParamsToEvent(req), {
    new: true
  })
    .then(event => {
      if (!event) {
        return eventNotFoundByIdResponse(req, res, event);
      }
      res.send(event);
    })
    .catch(err => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "event not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete event with id " + req.params.id
      });
    });
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  Event.findByIdAndRemove(req.params.id)
    .then(event => {
      if (!event) {
        return eventNotFoundByIdResponse(req, res, event);
      }
      console.log("Event deleted", res);
      req.flash("success", "Event wurde erfolgreich gelöscht");
      return res.redirect(303, "/events");
    })
    .catch(err => {
      console.log("Event not deleted", err);
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "event not found with id " + req.params.id
        });
      }
      return res.status(500).send({
        message: "Could not delete event with id " + req.params.id
      });
    });
};

function eventNotFoundByIdResponse(req, res, event) {
  console.log("Event not found with id " + req.params.id);
  req.flash("error", "Event konnte nicht gefunden werden");
  res.render("event", { event: event, moment: moment });
}

function assignParamsToEvent(req) {
  return new Event({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description
  });
}
