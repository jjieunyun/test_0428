var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const history = require('connect-history-api-fallback');

var indexRouter = require('./routes/index');


var app = express();
//static 위쪽에다가 실행해줘야함 : 순차적으로 실행되기 때문에
app.use(history());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/memo', indexRouter);

module.exports = app;
