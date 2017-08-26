const express = require('express');
const router = express.Router();
const yooController = require('../controller/yoo/boardController');

/* GET home page. */
router.get('/',  yooController.getHomePage);

/* moon router */
router.get('/moon', function (req, res, next) {
    res.send('Release');
});

module.exports = router;
