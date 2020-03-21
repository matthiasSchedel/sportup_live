// User.model.js
const mongoose = require("mongoose");
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
// const ObjectId = mongoose.Types.ObjectId();
// console.log('ObjectId type', mongoose.Types.ObjectId.name)
const userSchema = new mongoose.Schema({
    _id: mongoose.Types.ObjectId,
    name: String,
    email: String,
    friends: [{ user: mongoose.Types.ObjectId, name: String}],
    acceptedGDPR: [{acceptedDate: Date, acceptedVersion: String}],
    profilePic: String,
    passwordHash: String,

});
const User = mongoose.model("User", userSchema);
module.exports = User;