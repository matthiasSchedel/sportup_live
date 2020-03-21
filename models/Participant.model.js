// Participant.model.js
const mongoose = require("mongoose");
const participantSchema = new mongoose.Schema({
    user: mongoose.Types.ObjectId,
    events: [{event: mongoose.Types.ObjectId, name: String, startDate: Date}],
    groups: [{group: mongoose.Types.ObjectId, name: String}],
});
const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;