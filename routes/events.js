var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('events', {
        name: '',
        author: ''
    });
});

// add a new event
router.post('/', function(req, res, next) {

    let eventName = req.body.eventName;
    let author = req.body.author;
    let errors = false;

    if(!eventName || eventName.length === 0) {
        errors = true;

        // set flash message
        req.flash('error', "Please enter name and author");
        // render to add.ejs with flash message
        res.render('events', { title: 'Express' });
    }

    // if no error
    if(!errors) {

        var form_data = {
            eventName: eventName,
            author: author
        }

        // insert query
        // dbConn.query('INSERT INTO events SET ?', form_data, function(err, result) {
        //     //if(err) throw err
        //     if (err) {
        //         req.flash('error', err)

        //         // render to add.ejs
        //         res.render('events/add', {
        //             name: form_data.name,
        //             author: form_data.author
        //         })
        //     } else {
        //         req.flash('success', 'event successfully added');
        //         res.redirect('/events');
        //     }
        // })
    }
})

module.exports = router;
