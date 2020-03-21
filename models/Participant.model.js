// Participant.model.js
const mongoose = require("mongoose");
const participantSchema = new mongoose.Schema({
    user: ObjectId,
    events: [{event: ObjectId, name: String, startDate: Date}]

});
const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;