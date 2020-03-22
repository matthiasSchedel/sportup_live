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
    // add logic here
})

router.get('/:id', async function (req, res, next) {
        var groups = await GroupService.findOne(req.params.id)
        console.log('find group:' + groups)
        res.render("group", { group: groups, isJoined: GroupService.isJoined(), moment});
});

// Create a new event
router.post("/", async function(req, res, next) {
    try {
        await GroupService.create(req)
        var groups = await GroupService.get({})
        res.render("groups", { groups });
    } catch (e) {
        req.flash("error", "Fehler beim event erstellen");
        res.render("groups", { groups: [] });
    }
});

module.exports = router;
