var Event = require("../models/Event.model");
const mongoose = require("mongoose");

exports.get = async function(query) {
  try {
    return await Event.find(query);
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
    description: req.body.description,
    picture: req.body.picture
  });
}
