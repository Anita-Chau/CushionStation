var express           = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var hbs               = require('express-handlebars');
var expressValidator  = require('express-validator');
var flash             = require('connect-flash');
var paypal            = require('paypal-rest-sdk');
var Handlebars        = require("handlebars");
var MomentHandler     = require("handlebars.moment");
var session           = require('express-session');
var passport          = require('passport');
var MongoStore        = require('connect-mongo')(session);
var mongoose          = require('mongoose');

// mongoose.connect('mongodb://localhost/cushionStation', { useNewUrlParser: true, useCreateIndex: true, });
mongoose.connect('mongodb://heroku_7b0275cn:a12gketdqnk3be45ol40qjnvp7@ds155313.mlab.com:55313/heroku_7b0275cn', { useNewUrlParser: true, useCreateIndex: true, });

var index = require('./routes/index');
var users = require('./routes/users');
var checkout = require('./routes/checkout');
var dashboard = require('./routes/dashboard');


// PayPal Configuration

//Cuneyt's Configuration
paypal.configure({
  'mode': 'sandbox', //sandbox or live
  'client_id': 'AXcitKlCSw8SWd1-vuQheBn6lxbk8M4GqwQ9SW1IPsQVxeRGH8nP0Ks-UdXU_74T_Sj-1-YzE0VV9bgp',
  'client_secret': 'EDs4XFRCuWsHBYcOS-KwsQJ7VQNZWcEN3c_L0dyEiP_ivrSyUvF7KB4IOIMumlNwZBs0l13q24p64SVm'
});

// Moment Configuration -- For dates
MomentHandler.registerHelpers(Handlebars);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express session
app.use(session({
  secret            : 'secret',
  saveUninitialized : false,
  resave            : false,
  store             : new MongoStore({mongooseConnection: mongoose.connection}),
  cookie            : {maxAge: 120 * 60 * 1000} // 2 hours later experies the session
}));

app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});

// Passport initialize
app.use(passport.initialize());
app.use(passport.session());

// Express validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
    var namespace = param.split('.'),
    root          = namespace.shift(),
    formParam     = root;

    while(namespace.lenght) {
      formParam += '[' + namespace.shift() + ']';
    }

    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// Flash Configuration for messages
app.use(flash());

// Flash - Global variables
app.use(function(req, res, next){
  res.locals.success_msg  = req.flash('success_msg');
  res.locals.error_msg    = req.flash('error_msg');
  res.locals.error        = req.flash('error'); // Pasport error message
  res.locals.user         = req.user || null;
  next();
});

app.use('/', index);
app.use('/users', users);
app.use('/checkout', checkout);
app.use('/dashboard', dashboard);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var e = new Error('Not Found');
  e.status = 404;
  next(e);
});

// error handler
app.use(function(e, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = e.message;
  res.locals.error = req.app.get('env') === 'development' ? e : {};

  // render the error page
  res.status(e.status || 500);
  res.render('error', {
    title: 'Something went wrong',
    customNavbar: 'registration-navbar',
    containerWrapper: 'container',
    errorStatus: e.status
  });
});

module.exports = app;
