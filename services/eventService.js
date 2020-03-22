var Event = require("../models/Event.model");
const mongoose = require("mongoose");

exports.get = async function(query) {
  try {
    let events = await Event.find(query);
    console.log(events);
    return events;
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Getting Events");
  }
};

exports.create = async function(body) {
  try {
    var event = assignParamsToModel(body);
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
    let events = await Event.find({ _id: req.params.id });
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

exports.update = async function(body) {
  try {
    return await Event.findOneAndUpdate(body._id, assignParamsToModel(body), {
      new: true
    });
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

function assignParamsToModel(body) {
  return new Event({
    name: body.name,
    startDate: body.startDate,
    endDate: body.endDate,
    tags: body.tags,
    category: body.category,
    difficulty: body.difficulty,
    location: body.location,
    trainer: body.trainer,
    language: body.language,
    participants: body.participants,
    comments: body.comments,
    groups: body.groups,
    description: body.description,
    sessionLink: body.sessionLink,
    paymentLink: body.paymentLink,
    rating: body.rating,
    picture: body.picture
  });
}
