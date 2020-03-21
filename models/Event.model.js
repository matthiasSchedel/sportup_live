// Event.model.js
const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId();//.ObjectId();
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const eventSchema = new mongoose.Schema({
<<<<<<< Updated upstream
    id: ObjectId,
=======
    _id: mongoose.Types.ObjectId,
>>>>>>> Stashed changes
    name: String,
    startDate: Date,
    endDate: Date,
    tags: [String],
    category: [String],
    difficulty: String,
    location: String,
    trainer: mongoose.Types.ObjectId,
    language: String,
<<<<<<< Updated upstream
    participants: [{ user: ObjectId, name: String, hasPayed: Boolean }],
    comments: [{ user: ObjectId, name: String, text: String, date: Date }],
    description: String,
    sessionLink: String,
    paymentLink: String,
    rating: [{ user: ObjectId, value: Number, comment: String }],
=======
    participants: [{ user: mongoose.Types.ObjectId, name: String, hasPayed: Boolean}],
    comments: [{user: mongoose.Types.ObjectId, name: String, text: String, date: Date}],
    description: String,
    sessionLink: String,
    paymentLink: String,
    rating: [{user: mongoose.Types.ObjectId, value: Number, comment: String}],
>>>>>>> Stashed changes
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;