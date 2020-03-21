// Participant.model.js
const mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const participantSchema = new mongoose.Schema({
    user: ObjectId,
    events: [{ event: ObjectId, name: String, startDate: Date }],
    groups: [{ group: ObjectId, name: String }],
});
const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;