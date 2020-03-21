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
<<<<<<< HEAD
    friends: [{ user: mongoose.Types.ObjectId, name: String}],
    acceptedGDPR: [{acceptedDate: Date, acceptedVersion: String}],
=======
    friends: [{ user: ObjectId, name: String }],
    acceptedGDPR: [{ acceptedDate: Date, acceptedVersion: String }],
>>>>>>> 955c2f5e5d91c9f6dcf1ef8f3abe68157cc87351
    profilePic: String,
    passwordHash: String,

});
const User = mongoose.model("User", userSchema);
module.exports = User;