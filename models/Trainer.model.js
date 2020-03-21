// Trainer.model.js
const mongoose = require("mongoose");
// var ObjectId = mongoose.ObjectId;
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
const trainerSchema = new mongoose.Schema({
    user: mongoose.Types.ObjectId,
    bio: String,
    location: String,
    socialLinks: [{ network: String, link: String }],
    languages: [String],
    paymentLink: String

});
const Trainer = mongoose.model("Trainer", trainerSchema);
module.exports = Trainer;