const express = require('express');
const validate = require('express-validation');
const controller = require('../controllers/test.controller');
const {
  testRoute,
} = require('../validations/test.validation');

const router = express.Router();

/**
 *   basic route -- example
 * @api {get} /test?name= simple get
 * @apiVersion 1
 * @apiName testNewRoute
 * @apiGroup Test
 *
 * @apiParam {name} string  input just for testing.
 *
 * @apiSuccess (Created 200) {String}  name         name name of the User
 *
 * @apiError (Bad Request 400)   ValidationError  Some parameters may contain invalid values
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "name": "ahmed",
 *     }
 *
 * @apiError (Bad Request 400)  ValidationError  name is required
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 * {
 *   code: 400,
 *     message: "error happens :(",
 *   errors: [
 *   {
 *     field: "name",
 *     location: "query",
 *     messages: [
 *       ""name" is required"
 *     ],
 *     types: [
 *       "any.required"
 *     ]
 *   }
 * ]
 * }
 */

router.get('/', validate(testRoute), controller.test);


module.exports = router;
