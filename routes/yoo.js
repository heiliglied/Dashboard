const express = require('express');
const router = express.Router();
const boardController = require('../controller/yoo/boardController');

/* GET home page. */
router.get('/', boardController.getBoard);
router.get('/add', boardController.addPost);
router.post('/add', boardController.createPost);

module.exports = router;
