// Event.model.js
const mongoose = require("mongoose");
// const ObjectId = mongoose.Types.ObjectId();//.ObjectId();
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const eventSchema = new mongoose.Schema({
    id: ObjectId,
    name: String,
    startDate: Date,
    endDate: Date,
    tags: [String],
    category: [String],
    difficulty: String,
    location: String,
    trainer: ObjectId,
    language: String,
    participants: [{ user: ObjectId, name: String, hasPayed: Boolean }],
    comments: [{ user: ObjectId, name: String, text: String, date: Date }],
    description: String,
    sessionLink: String,
    paymentLink: String,
    rating: [{ user: ObjectId, value: Number, comment: String }],
});
const Event = mongoose.model("Event", eventSchema);
module.exports = Event;