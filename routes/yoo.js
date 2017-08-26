const express = require('express');
const router = express.Router();
const boardController = require('../controller/yoo/boardController');

/* GET home page. */
router.get('/', boardController.getBoard);
router.get('/add', boardController.addPost);

module.exports = router;
