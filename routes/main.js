var express = require('express');
var router = express.Router();
var moment = require("moment");
var EventService = require("../services/eventService");
var GroupService = require("../services/groupService");

/* GET home page. */
router.get('/', async function (req, res, next)
{
  try
  {
    var events = await EventService.get({})
    var groups = await GroupService.get({})
    console.log(JSON.stringify(req.session.user));
    res.render('main', { events, groups, moment, user: req.session.user || { name: 'Sportsfreund' } });
  } catch (e)
  {
    req.flash("error", "Fehler beim event oder gruppen laden");
    res.render("index", { events: [], moment, user: req.user });
  }
});

module.exports = router;
