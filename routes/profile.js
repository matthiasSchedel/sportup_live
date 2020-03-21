var express = require('express');
var router = express.Router();
var User = require('../models/User.model')
var Participant = require('../models/Participant.model')
var currentUserEmail = 'janine_sul@mailinator.com'


/* GET user profile. */
router.get('/', function(req, res, next) {
  User.find({"email":currentUserEmail}, function(error, result ) {
    console.log("User result", result);
    if (result.length > 0) {
        
        var user = result[0]
        console.log(`User ${user.name} gefunden.`)

        if (result.length > 1) {
            console.warn("More than one entry for email. Returning first entry. Check DB.")
        }
        Participant.find({"user":user._id}, function(error, parResult ) { 
            console.log("Participant result", parResult);
            if (parResult.length > 0) { 
                res.render('profile', { user: user, courses: parResult[0] });
            } else { 
                console.log("No participations found.")
            }
            
        });
    } else {    // No user found
    res.render('profile', { user: undefined, courses: undefined });
    }
  });
});

module.exports = router;
