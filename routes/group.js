var express = require('express');
var router = express.Router();
var Group = require('../models/Group.model')
var groupService = require('../services/group.service')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Group.find({}, function (error, result) {
    res.render('groups', { groups: result });
  });
});

router.post('/:name', function (req, res, next) {
  groupService.changeGroupState()
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

module.exports = router;
