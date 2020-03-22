var express = require("express");
var router = express.Router();
var moment = require("moment");
var EventService = require("../services/eventService");

// Retrieve all events
router.get("/", async function(req, res, next) {
    try {
        var events = await EventService.get({})
        res.render("events", { events: events, moment: moment });
    } catch (e) {
        req.flash("error", "Fehler beim event laden");
        res.render("events", { events: [], moment: moment });
    }
});

// Create a new event
router.post("/", async function(req, res, next) {
    try {
        await EventService.create(req)
        var events = await EventService.get({})
        res.render("events", { events: events, moment: moment });
    } catch (e) {
        req.flash("error", "Fehler beim event erstellen");
        res.render("events", { events: [], moment: moment });
    }
});

// Retrieve a single event with id
router.get("/:id", async function(req, res, next) {
    try {
        var event = await EventService.findOne(req)
        console.log(event);
        res.render("event", { event: event, moment: moment });
    } catch (e) {
        req.flash("error", "Fehler beim event laden");
        res.render("event", { event: [], moment: moment });
    }
});

// Update a event with id
router.put("/:id", async function(req, res, next) {
    try {
        var event = await EventService.update(req)
        res.render("event", { event: event, moment: moment });
    } catch (e) {
        req.flash("error", "Fehler beim event laden");
        res.render("event", { event: [], moment: moment });
    }
});

// Delete a event with id
router.get("/delete/:id", async function(req, res, next) {
    try {
        var events = await EventService.delete(req)
        req.flash("success", "Event wurde gelöscht");
        req.method = 'GET'
        res.redirect('/events');
    } catch (e) {
        console.log(e)
        req.flash("error", "Fehler beim event löschen");
        req.method = 'GET'
        res.redirect('/events');
    }
});

module.exports = router;
