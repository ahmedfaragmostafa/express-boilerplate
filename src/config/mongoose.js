const mongoose = require('mongoose');
const logger = require('./../config/logger');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

const env = 'development';
// print mongoose logs in dev env
if (env === 'development') {
  mongoose.set('debug', true);
}

/**
 * Connect to mongo db
 *
 * @returns {object} Mongoose connection
 * @public
 */
exports.connect = () => {
  mongoose.connect('mongodb://localhost:27017/express-rest-es2017-boilerplate', {
    keepAlive: 5,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  return mongoose.connection;
};
