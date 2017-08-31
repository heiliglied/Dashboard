var express = require('express');
var router = express.Router();
var controller = require('../controller/moon/postcontroller');

/* moon router */
router.get('/', function (req, res, next) {
    res.render('moon/index');
});

router.get('/write', function (req, res, next) {
    res.render('moon/write', { title: 'moon' });
});

router.post('/post', controller.post);

module.exports = router;
