var express = require('express');
var router = express.Router();
var controller = require('../controller/moon/postcontroller');
var csrf = require('csurf');
var csrfProtection = csrf({ cookie: true });
var logincheck = require('../middleware/logincheck');
var validcontroller = require('../controller/moon/validcontroller')

/* moon router */
router.get('/', function (req, res, next) {
    res.render('moon/index');
});

router.get('/list/:page?/:key?', controller.list);

router.get('/view/:number', csrfProtection, controller.view);

router.get('/write', csrfProtection, function (req, res, next) {
    res.render('moon/write', { title: 'moon', csrfToken: req.csrfToken(), message: req.flash('message') });
});

//logincheck 미들웨어 추가. 함수 실행전에 logincheck가 먼저 실행됨.
router.get('/logincheck', logincheck, function (req, res, next) {
    res.send('logined');
})

router.get('/modify/:number', csrfProtection, controller.modify);

//validcontroller 미들웨어 추가. csrfProtection, controller.post가 실행되기 전에 먼저 실행 됨.
router.post('/post', validcontroller, csrfProtection, controller.post);

router.post('/update', csrfProtection, controller.update);

router.post('/delete', csrfProtection, controller.delete);

module.exports = router;