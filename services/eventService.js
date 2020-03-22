var Event = require("../models/Event.model");
const mongoose = require("mongoose");

exports.getEvents = async function (query) {
    try {
        return await Event.find(query)
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Error while Getting Events')
    }
}

exports.createEvent = async function (req) {
    try {
        var event = assignParamsToEvent(req);
        event._id = new mongoose.Types.ObjectId();
        return await event.save()
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Error while Creating Event')
    }
}

exports.findOne = async function (req) {
    try {
        return await Event.find(query)(req.params.id)
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Error while Getting Event')
    }
};

exports.update = async function(req) {
    try {
        return await Event.findByIdAndUpdate(req.params.id, assignParamsToEvent(req), {new: true})
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Error while Updating Event')
    }
};

exports.delete = async function(req) {
    try {
        return await Event.findByIdAndRemove(req.params.id)
    } catch (e) {
        // Log Errors
        console.log(e);
        throw Error('Error while Deleting Event')
    }
};

function assignParamsToEvent(req) {
  return new Event({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    description: req.body.description
  });
}
