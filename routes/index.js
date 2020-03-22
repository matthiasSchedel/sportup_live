var express = require('express');
var router = express.Router();
var moment = require("moment");
var EventService = require("../services/eventService");
var GroupService = require("../services/groupService");

/* GET home page. */
router.get('/', async function(req, res, next) {
    try {
        var events = await EventService.get({})
        var groups = await GroupService.get({})
        res.render('index', { events, groups, moment});
    } catch (e) {
        req.flash("error", "Fehler beim event oder gruppen laden");
        res.render("index", { events: [], moment });
    }

  
});

module.exports = router;
