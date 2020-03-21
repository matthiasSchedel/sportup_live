var express = require("express");
var router = express.Router();
var Event = require("../models/Event.model");
var EventService = require("../services/eventService");

// Retrieve all events
router.get('/', EventService.findAll);
// Create a new event
router.post('/', EventService.create);
// Retrieve a single event with id
router.get('/:id', EventService.findOne);
// Update a event with id
router.put('/:id', EventService.update);
// Delete a event with id
router.delete('/:id', EventService.delete);

module.exports = router;