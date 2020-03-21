// Participant.model.js
const mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const participantSchema = new mongoose.Schema({
<<<<<<< HEAD
    user: mongoose.Types.ObjectId,
    events: [{event: mongoose.Types.ObjectId, name: String, startDate: Date}],
    groups: [{group: mongoose.Types.ObjectId, name: String}],
=======
    user: ObjectId,
    events: [{ event: ObjectId, name: String, startDate: Date }],
    groups: [{ group: ObjectId, name: String }],
>>>>>>> 955c2f5e5d91c9f6dcf1ef8f3abe68157cc87351
});
const Participant = mongoose.model("Participant", participantSchema);
module.exports = Participant;