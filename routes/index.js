var express = require('express');
var router = express.Router();
var mongo = require('mongodb');
var db = require('monk')('localhost:27017/express_e_commerce');

/* GET home page. */
router.get('/', function(req, res, next) {
  //var db = req.db;
  var products = db.get('products');
  products.find({}, {}, function(err, products){
    res.render('index', {
      "title": "Welcome to product page",
      "products": products
    });
  });
});

router.get('/about', function(req, res, next){
  res.render('./site/about');
});

router.get('/contact', function(req, res, next){
  res.render('./site/contact');
});

module.exports = router;
