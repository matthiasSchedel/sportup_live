var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var bcrypt = require('bcrypt');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var mainPageRouter = require('./routes/main');
var loginPageRouter = require('./routes/login');
var signupPageRouter = require('./routes/signup');
var privacyPolicyPageRouter = require('./routes/privacy-policy');
var termsOfUsePageRouter = require('./routes/terms-of-use');
var aboutPageRouter = require('./routes/about');
var contactPageRouter = require('./routes/contact');


var mongoose = require("mongoose");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var groupsRouter = require('./routes/group');

var User = require('./models/User.model');
var Participant = require('./models/Participant.model');
var Group = require('./models/Group.model');
var Event = require('./models/Event.model');
var Trainer = require('./models/Trainer.model');

// ' + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + '@
// mongoose.connect('mongodb://' + process.env.MONGO_INITDB_ROOT_USERNAME + ":" + process.env.MONGO_INITDB_ROOT_PASSWORD + '@localhost:27017/' + process.env.MONGO_INITDB_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb://mongo:27017/' + process.env.MONGO_INITDB_DATABASE, { useNewUrlParser: true, useUnifiedTopology: true });
var app = express();


// mongoose.connect('mongodb://mongo:27017/sportup', { useNewUrlParser: true });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(expressSession({
  secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
}, function (email, password, next)
{
  User.findOne({
    email: email
  }, function (err, user)
  {
    if (err) return next(err);
    if (!user || !bcrypt.compareSync(password, user.passwordHash))
    {
      return next({ message: 'E-Mail oder Passwort falsch' })
    }
    next(null, user);
  })
}));


passport.use('signup-local', new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
}, function (email, password, next)
{
  console.log('signup local');
  User.findOne({
    email: email
  }, function (err, user)
  {
    if (err) return next(err);
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
  });
}));

passport.serializeUser(function (user, next)
{
  next(null, user._id);
});

passport.deserializeUser(function (id, next)
{
  User.findById(id, function (err, user)
  {
    next(err, user);
  });
});

app.get('/logout', function (req, res, next)
{
  req.logout();
  res.redirect('/');
});

app.get('/index.html', function (req, res, next)
{
  res.redirect('/main');
});


app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login-page' }),
  function (req, res)
  {
    res.redirect('/main');
  });


app.post('/signup',
  passport.authenticate('signup-local', { failureRedirect: '/signup-page' }),
  function (req, res)
  {
    res.redirect('/main');
  });

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use('/login-page', loginPageRouter);
app.use('/signup-page', signupPageRouter);
app.use('/main', mainPageRouter);
app.use('/privacy-policy', privacyPolicyPageRouter);
app.use('/terms-of-use', termsOfUsePageRouter);
app.use('/contact', contactPageRouter);
app.use('/about', aboutPageRouter);
app.use('/groups', groupsRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next)
{
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next)
{
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
