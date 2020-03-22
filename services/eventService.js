var Event = require("../models/Event.model");
const mongoose = require("mongoose");

exports.get = async function(query) {
  try {
    let events = await Event.find(query);
    console.log(events);
    return events
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Getting Events");
  }
};

exports.create = async function(req) {
  try {
    var event = assignParamsToModel(req);
    event._id = new mongoose.Types.ObjectId();
    return await event.save();
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Creating Event");
  }
};

exports.findOne = async function(req) {
  try {
    let events = await Event.find({_id:req.params.id});
    if (events.length > 0) {
        return events[0]; 
    }
    throw Error("No event found");
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Getting Event");
  }
};

exports.update = async function(req) {
  try {
    return await Event.findByIdAndUpdate(
      req.params.id,
      assignParamsToModel(req),
      { new: true }
    );
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Updating Event");
  }
};

exports.delete = async function(req) {
  try {
    return await Event.findByIdAndRemove(req.params.id);
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Deleting Event");
  }
};

function assignParamsToModel(req) {
  return new Event({
    name: req.body.name,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    tags: req.body.tags,
    category: req.body.category,
    difficulty: req.body.difficulty,
    location: req.body.location,
    trainer: req.body.trainer,
    language: req.body.language,
    participants: req.body.participants,
    comments: req.body.comments,
    groups: req.body.groups,
    description: req.body.description,
    sessionLink: req.body.sessionLink,
    paymentLink: req.body.paymentLink,
    rating: req.body.rating,
    picture: req.body.picture,
  });
}