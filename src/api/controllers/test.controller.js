// const httpStatus = require('http-status');
// example =>> res.status(httpStatus.NO_CONTENT)

exports.test = (req, res) => res.json({ name: req.query.name });
