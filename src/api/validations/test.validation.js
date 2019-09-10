const Joi = require('joi');

module.exports = {

  // query example
  testRoute: {
    query: {
      name: Joi.string().required(),
    },
  },

  // body example ---
  createUser: {
    body: {
      email: Joi.string().email().required(),
    },
  },

};
