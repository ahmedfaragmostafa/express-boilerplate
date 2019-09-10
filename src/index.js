// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign
const logger = require('./config/logger');
const app = require('./config/express');
const mongoose = require('./config/mongoose');

// open mongoose connection
mongoose.connect();

const port = 8001;
const env = 'development';
// listen to requests
app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

/**
* Exports express
* @public
*/
module.exports = app;
