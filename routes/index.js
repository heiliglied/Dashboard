var express = require('express');
var router = express.Router();
const sampleController = require('../controller/sampleController');

/* GET home page. */
router.get('/', sampleController.homePage);

router.get('/yoo', sampleController.dashBoard);

router.post('/yoo', sampleController.sampleForm);

router.get('/data', sampleController.getData);



module.exports = router;
