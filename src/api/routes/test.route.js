const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/test.controller');
const {
  testRoute,
} = require('../validations/test.validation');

const router = express.Router();


router.get('/', validate(testRoute), controller.test);


module.exports = router;
