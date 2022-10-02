var express = require('express');
var router = express.Router();
const controller = require('./Movie.controller');

/* GET users listing. */
router.get('/', controller.getAll);

module.exports = router;
