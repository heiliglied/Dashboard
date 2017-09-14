const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const flash = require('connect-flash');

const helpers = require('./helpers');
const index = require('./routes/index');
const moon = require('./routes/moon');
const im = require('./routes/im');
const lee = require('./routes/lee');
const yoo = require('./routes/yoo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.h = helpers;
  res.locals.currentPath = req.path;
  next();
});


//몽고디비는 반드시 라우터 이전에 선언되어야 함.
app.use(session({
    //몽고디비에 세션 저장. sessions 컬렉션이 자동으로 생성됨.
    store: new MongoStore({
        ttl: 24 * 60 * 60,
        url: process.env.DATABASE,
    }),
    saveUninitialized: true,
    resave: true,
    key: 'study',
    secret: 'study_session_key',
    cookie: {
        maxAge: 1000 * 60 * 60
    },
}));

//flash session. req.flash('key', 'value')로 한번만 호출되는 세션 사용 가능. value가 없을 시 읽어옴.
app.use(flash());

app.use('/', index);
app.use('/moon', moon);
app.use('/im', im);
app.use('/lee', lee);
app.use('/yoo', yoo);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
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
