// User.model.js
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    _id: ObjectId,
    name: String,
    email: String,
    friends: [{ user: ObjectId, name: String}],
    acceptedGDPR: [{acceptedDate: Date, acceptedVersion: String}],
    profilePic: String

});
const User = mongoose.model("User", userSchema);
module.exports = User;