const mongoose = require('mongoose');

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle an bad connections
mongoose.connect(process.env.DATABASE, { useMongoClient: true });
mongoose.Promise = global.Promise; //Tell Mongoose to use Es6 Promise
mongoose.connection.on('error', (err) => {
  console.error(`🚫🚫🚫🚫 → ${err.message}`);
});

// import models
require('./models/yoo/Post');
require('./models/moon/Content');

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