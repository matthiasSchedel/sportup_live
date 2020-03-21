// Group.model.js
const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
    name: String,
    trainers: [{user: ObjectId, name: String}],
    participants: [{user: ObjectId, name: String}],
    description: String,
    picture: String,

});
const Group = mongoose.model("Group", groupSchema);
module.exports = Group;