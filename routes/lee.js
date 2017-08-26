var express = require('express');
var router = express.Router();

/* moon router */
router.get('/', function (req, res, next) {
    res.send('Lee jeongjae');
});

module.exports = router;
