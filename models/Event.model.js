// Event.model.js
const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId();//.ObjectId();
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const eventSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    startDate: Date,
    endDate: Date,
    tags: [String],
    category: [String],
    difficulty: String,
    location: String,
    trainer: mongoose.Types.ObjectId,
    language: String,
    participants: [{ user: mongoose.Types.ObjectId, name: String, hasPayed: Boolean}],
    comments: [{user: mongoose.Types.ObjectId, name: String, text: String, date: Date}],
    groups: [{group: mongoose.Types.ObjectId, name: String}],
    description: String,
    sessionLink: String,
    paymentLink: String,
    rating: [{user: mongoose.Types.ObjectId, value: Number, comment: String}],
    picture: String,
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;