exports.signup = function (user)
{
  if (user) return next({ message: "Benutzer existiert bereits" });
  let newUser = new User({
    _id: mongoose.Types.ObjectId(),
    name: "",
    email: email,
    passwordHash: bcrypt.hashSync(password, 10),
    friends: [],
    accecptGDPR: [{ acceptedDate: new Date(), acceptedVersion: "1" }],
    profilePic: ""
  })
  newUser.save(function (err)
  {
    next(err, newUser);
  });
}