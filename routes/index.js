var express = require('express');
var router = express.Router();
var moment = require("moment");
var EventService = require("../services/eventService");

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        var events = await EventService.getEvents({})
        res.render('index', { events: events, moment: moment});
    } catch (e) {
        req.flash("error", "Fehler beim event laden");
        res.render("index", { events: [], moment: moment });
    }

  
});

module.exports = router;
