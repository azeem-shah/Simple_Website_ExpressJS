var express = require('express');
var router = express.Router();

var Webjade=require('../model/data');

router.post('/contact',function(req,res){


	    	var db={
		
		email: req.body.email,
		subject: req.body.subject,
		message: req.body.message


		};
	//	console.log(db);
		var input=new Webjade(db);
		  input.save();
		  console.log("Message received");

	res.redirect('/contact');
})

module.exports = router;