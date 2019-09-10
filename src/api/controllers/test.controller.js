// const httpStatus = require('http-status');
// example =>> res.status(httpStatus.NO_CONTENT)

/**
 * basic route -- example
 * http://localhost:8001/test?name=ahmed
 * @public
 */
exports.test = (req, res) => res.json({ name: req.query.name });
