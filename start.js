const mongoose = require('mongoose');

require('dotenv').config({ path: 'variables.env' });

// DB 커넥션 및 연결 에러 발생시 처리 
mongoose.connect(process.env.DATABASE, {useMongoClient: true});
mongoose.Promise = global.Promise; // Mongoose Promise로 ES6 Promise 사용
mongoose.connection.on('error', (err) => {
  console.log(`🚫🚫🚫🚫🚫 ${err.message}`);
})

require('./models/Sample');

const app = require('./app');
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
const server = app.listen(app.get('port'), () => {
	console.log(`Express Listening ON PORT ${server.address().port}`);
});

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}