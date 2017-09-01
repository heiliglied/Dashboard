var express = require('express');
var router = express.Router();
const boardController = require('../controller/Lee/boardController')

/* GET home page. */
router.get('/', boardController.indexBoard);
router.get('/write', boardController.writeBoard);

/*router.get('/', function (req, res, next) {
    res.render(boardController.getIndex);
});*/

module.exports = router;
