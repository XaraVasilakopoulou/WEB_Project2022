var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mysql = require('mysql');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var userLogin = require('./routes/userLogIn')

var app = express();

//MySql
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'web2021-2022'
})

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
app.use('/users', usersRouter);
app.use('/userLogin', userLogin);

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

app.get('/usersData', (req, res) => {
  pool.getConnection((err, connection) => {
      if(err) throw err
      console.log('connected as id ' + connection.threadId)
      connection.query('SELECT * from users', (err, rows) => {
          connection.release()

          if (!err) {
              res.send(rows)
          } else {
              console.log(err)
          }

          // if(err) throw err
          console.log('The data from beer table are: \n', rows)
      })
  })
})

module.exports = app;
