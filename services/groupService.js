exports.changeGroupState = async function (id, userid, username) {
  let group = await Group.findById(id)
  const participants = group.participants.filter(p => p.user == userid)
  if (participants && participants.length) {
    group.participants = group.participants.filter(p => p.user != userid)
  } else {
    if(!group.participants){
      group.participants = []
    }
    group.participants.push({ user: userid, name: username });
  }
  group.save()
};

exports.isJoined = async function (id, userid) {
  let group = await Group.findById(id)
  const participants = group.participants.filter(p => p.user == userid)
  return participants && participants.length == 1
};

var Group = require("../models/Group.model");
exports.get = async function (query) {
  try {
    return await Group.find(query);
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while getting Groups");
  }
};

exports.create = async function (body) {
  try {
    var group = assignParamsToModel(body);
    return await group.save();
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Creating Group");
  }
};

exports.update = async function (body) {
  try {
    return await Group.findByIdAndUpdate(
      body._id,
      assignParamsToModel(body),
      { new: true, useFindAndModify: false }
    );
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Updating Group");
  }
};

exports.addEventToGroup = async function (groupId, event) {
  try {
    return await Group.update(
      { _id: groupId },
      { $addToSet: { events: event } }
    )
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Updating Group");
  }
};

exports.findOne = async function (_id) {
  try {
    let groups = await Group.find({ _id });
    if (groups.length > 0) {
      return groups[0];
    }
    throw Error("No group found");
  } catch (e) {
    // Log Errors
    console.log(e);
    throw Error("Error while Getting Group");
  }
};

function assignParamsToModel(body) {
  return new Group({
    name: body.name,
    trainers: body.trainers,
    participants: body.participants,
    description: body.description,
    picture: body.picture,
    events: body.events,
  });
}

