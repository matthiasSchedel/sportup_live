exports.changeGroupState = function() {
  // TODO Fill with logic
};

exports.isJoined = function() {
  // TODO Fill with logic
  return false;
};

var Group = require("../models/Group.model");
exports.get = async function(query) {
  try {
    return await Group.find(query);
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while getting Groups");
  }
};

exports.create = async function(req) {
  try {
    var group = assignParamsToModel(req);
    return await group.save();
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Creating Group");
  }
};

function assignParamsToModel(req) {
  return new Group({
    name: req.body.name,
    description: req.body.description,
    picture: req.body.picture,
  });
}
