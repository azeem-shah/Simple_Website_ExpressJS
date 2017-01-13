var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});



router.get('/technology', function(req, res) {
  res.render('technology');
});

router.get('/client', function(req, res) {
  res.render('client');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});



module.exports = router;
