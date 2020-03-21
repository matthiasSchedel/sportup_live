var express = require('express');
var router = express.Router();
var Group = require('../models/Group.model')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Group.find({}, function(error, result ) {
    res.render('groups', { groups: result });
  });
});

router.get('/:name', function (req, res, next) {
  Group.findOne({ name: req.params.name}, function(error, result ) {
    res.render('group', { group: result });
  });
});

module.exports = router;
