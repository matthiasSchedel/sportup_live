var express = require('express');
var router = express.Router();
var moment = require("moment");
var Group = require('../models/Group.model')
var GroupService = require('../services/groupService')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Group.find({}, function (error, result) {
    res.render('groups', { groups: result });
  });
});

router.post('/:id', function (req, res, next) {
  await GroupService.changeGroupState(req.params.id, req.session.user._id, "")
  res.redirect('/group/' + req.params.id);
})

router.get('/:id', async function (req, res, next) {
  var groups = await GroupService.findOne(req.params.id)
  let isJoined = false;
    if (req.session.user) {
      isJoined = await GroupService.isJoined(result._id, req.session.user._id)
    }
  res.render("group", { group: groups, isJoined: isJoined, moment });
});

// Create a new group
router.post("/", async function (req, res, next) {
  try {
    await GroupService.create(req)
    var groups = await GroupService.get({})
    res.render("groups", { groups });
  } catch (e) {
    req.flash("error", "Fehler beim group erstellen");
    res.render("groups", { groups: [] });
  }
});

module.exports = router;
