var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var app = express();

// routes
var indexRouter = require('./routes/index');
var shops = require('./routes/shops');
var userLogin = require('./routes/userLogIn')
var userSignUp = require('./routes/userSignUp')
var profile = require('./routes/profileChanges')
var adminShops = require('./routes/adminShops')
var adminShopsMod = require('./routes/adminShopsMod')
var profileEdit = require('./routes/profileEdit')
var adminProducts = require('./routes/adminProducts')



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/shops', shops);
app.use('/userLogin', userLogin);
app.use('/userSignUp', userSignUp);
app.use('/profile', profile);
app.use('/adminShops', adminShops);
app.use('/adminShopsMod', adminShopsMod);
app.use('/profileEdit', profileEdit);
app.use('/adminProducts', adminProducts);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
