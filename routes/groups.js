var express = require('express');
var router = express.Router();
import Group from '../models/Group.model';

/* GET users listing. */
router.get('/', function (req, res, next) {
  
  // const groups = Group.find();
  // console.log(groups);
  res.render('groups', {  });
});

module.exports = router;
