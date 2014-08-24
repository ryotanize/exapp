var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/main', function(req, res) {
  res.render('main', { });
});

router.get('/mobile', function(req, res) {
  res.render('mobile', { sessid: 1 });
});


module.exports = router;
