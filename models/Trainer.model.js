// Trainer.model.js
const mongoose = require("mongoose");
const trainerSchema = new mongoose.Schema({
    user: ObjectId,
    bio: String,
    location: String,
    socialLinks: [{network: String, link: String}],
    languages: [String],
    paymentLink: String

});
const Trainer = mongoose.model("Trainer", trainerSchema);
module.exports = Trainer;