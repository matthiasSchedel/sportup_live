var express = require('express');
var router = express.Router();
var Group = require('../models/Group.model')
var GroupService = require('../services/groupService')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Group.find({}, function (error, result) {
    res.render('groups', { groups: result });
  });
});

router.post('/:name', function (req, res, next) {
  GroupService.changeGroupState()
  renderGroupDetail(req, res)
})

router.get('/:name', function (req, res, next) {
  renderGroupDetail(req, res)
});

const renderGroupDetail = (req, res) => {
  Group.findOne({ name: req.params.name }, function (error, result) {
    res.render('group', {
      group: result,
      isJoined: groupService.isJoined()
    });
  });
}

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
