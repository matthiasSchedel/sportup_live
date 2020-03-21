// Group.model.js
const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema({
    name: String,
    trainer: [{user: ObjectId, name: String}],
    participants: [{user: ObjectId, name: String}],

});
const Group = mongoose.model("Group", groupSchema);
module.exports = Group;