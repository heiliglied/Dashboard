var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* moon router */
router.get('/moon', function (req, res, next) {
    res.send('Release');
});

module.exports = router;
