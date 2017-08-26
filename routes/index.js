const express = require('express');
const router = express.Router();
const yooController = require('../controller/yoo/boardController');

/* GET home page. */
router.get('/',  yooController.getHomePage);

module.exports = router;
