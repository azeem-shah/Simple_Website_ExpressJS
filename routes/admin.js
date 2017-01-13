var express = require('express');
var router = express.Router();

var Webjade=require('../model/data');


router.get('/admin', function(req, res) {
  res.render('admin');
});

router.post('/admin',function(req,res){
	console.log("in admin post");
	console.log("username "+req.body.username);
	console.log("password "+req.body.password);

	if(req.body.username=="test" && req.body.password=="test" ){

         Webjade.find({}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('adminone', {"items":docs});
              }     
        });


	

	}
	else{
		 
		res.render('admin',{error:"Wrong Email or Password"});
	}

})

module.exports = router;