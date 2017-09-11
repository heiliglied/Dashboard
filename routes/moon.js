var express = require('express');
var router = express.Router();
var controller = require('../controller/moon/postcontroller');

/* moon router */
router.get('/', function (req, res, next) {
    res.render('moon/index');
});

router.get('/list/:page?/:key?', controller.list);

router.get('/view/:number', controller.view);

router.get('/write', function (req, res, next) {
    res.render('moon/write', { title: 'moon' });
});

router.get('/modify/:number', controller.modify);

router.post('/post', controller.post);

router.post('/update', controller.update);

router.post('/delete', controller.delete);

module.exports = router;