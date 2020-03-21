var express = require('express');
var router = express.Router();
var Group = require('../models/Group.model')

/* GET groups listing. */
router.get('/', function (req, res, next) {
  Group.find({}, function(error, result ) {
    console.log("Group result", result);
    res.render('groups', { groups: result });
  });
});

module.exports = router;
