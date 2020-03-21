var express = require('express');
var router = express.Router();
var Group = require('../models/Group.model')

/* GET users listing. */
router.get('/', function (req, res, next) {
  Group.find({}, function(error, result ) {
    console.log("Group result", result);
    res.render('groups', { groups: result });
  });
});

module.exports = router;
