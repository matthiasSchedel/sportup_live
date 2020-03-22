var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var flash = require('express-flash');
var session = require('express-session');

var bcrypt = require('bcrypt');
var expressSession = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var indexRouter = require('./routes/index');
var mainRouter = require('./routes/main');
var usersRouter = require('./routes/users');
var loginPageRouter = require('./routes/login');
var signupPageRouter = require('./routes/signup');
var dsgvoPageRouter = require('./routes/dsgvo');
var aboutPageRouter = require('./routes/about');
var contactPageRouter = require('./routes/contact');


var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var indexRouter = require('./routes/index');
var eventsRouter = require('./routes/events');
var usersRouter = require('./routes/users');
var profileRouter = require('./routes/profile');
var groupsRouter = require('./routes/group');

var User = require('./models/User.model');
var Participant = require('./models/Participant.model');
var Group = require('./models/Group.model');
var Event = require('./models/Event.model');
var Trainer = require('./models/Trainer.model');
var MailService = require('./services/mailService');

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
app.use(session({
  cookie: { maxAge: 60000 },
  store: new session.MemoryStore,
  saveUninitialized: true,
  resave: 'true',
  secret: 'secret'
}))
app.use(flash());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressSession({
  secret: process.env.EXPRESS_SESSION_SECRET
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
}, function (req, email, password, next)
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
    req.session.user = user;
    req.session.isLoggedIn = true;
    // (async () =>
    // {
    //   let res = MailService.sendMail(user.email, user.name).then(r => r).catch(e => e);
    //   console.log('mail res', res);
    // });
    next(null, user);

  })
}));


passport.use('signup-local', new LocalStrategy({
  usernameField: "email",
  passwordField: "password",
  passReqToCallback: true,
}, function (req, email, password, next)
{
  console.log('signup local', req.body.password);
  User.findOne({
    email: email
  }, function (err, user)
  {
    let body = req.body;
    console.log('got body', JSON.stringify(req.body));
    // if (body.)
    // if (req) return next({ message: JSON.stringify(req.body) });
    if (err) return next(err);
    if (user) return next({ message: "Benutzer existiert bereits" });
    let newUser = new User({
      _id: mongoose.Types.ObjectId(),
      name: body.name,
      email: email,
      passwordHash: bcrypt.hashSync(password, 10),
      friends: [],
      accecptGDPR: [{ acceptedDate: new Date(), acceptedVersion: "1" }],
      profilePic: "",
      userType: body.userType
    })
    req.session.user = newUser;
    req.session.isLoggedIn = true;
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
  req.session.user = null;
  req.session.isLoggedIn = false;
  req.logout();

  res.redirect('/');
});

app.get('/index.html', function (req, res, next)
{
  res.redirect('/');
});

// app.get('/main', function (req, res, next)
// {
//   if (req.session.isLoggedIn) {

//   }
// });


app.post('/login',
  passport.authenticate('local', { failureRedirect: '/login-page' }),
  function (req, res)
  {
    passport.deserializeUser
    res.redirect('/main');
  });


app.post('/signup',
  // passport.initialize
  passport.authenticate('signup-local', { failureRedirect: '/signup-page' }),
  function (req, res)
  {
    res.redirect('/main');
  });

app.use('/', indexRouter);
app.use('/main', mainRouter);
app.use('/events', eventsRouter);
app.use('/users', usersRouter);

app.use('/login-page', loginPageRouter);
app.use('/signup-page', signupPageRouter);
app.use('/dsgvo', dsgvoPageRouter);
app.use('/contact', contactPageRouter);
app.use('/about', aboutPageRouter);
app.use('/group', groupsRouter);
app.use('/profile', profileRouter);



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
