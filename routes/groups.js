var express = require('express');
var router = express.Router();
var Group = require('../models/Group.model')

/* GET users listing. */
router.get('/', function (req, res, next) {
  const groups = Group.find();
  console.log("jfjfjf", groups);
  res.render('groups', { groups: groups });
});

module.exports = router;
