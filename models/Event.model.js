// Event.model.js
const mongoose = require("mongoose");
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
    description: String,
    sessionLink: String,
    paymentLink: String,
    rating: [{user: mongoose.Types.ObjectId, value: Number, comment: String}],
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;