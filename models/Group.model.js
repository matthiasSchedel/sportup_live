// Group.model.js
const mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const groupSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    name: String,
    trainers: [{ user: ObjectId, name: String }],
    participants: [{ user: ObjectId, name: String }],
    description: String,
    picture: String,
    events: [{event: ObjectId, name: String, startDate: Date}],

});
const Group = mongoose.model("Group", groupSchema);
module.exports = Group;