var express = require('express');
var router = express.Router();

var Webjade=require('../model/data');


router.get('/delete/:id',function(req,res){

	var id=req.params.id;
	console.log("ID to delete is "+id);

	  Webjade.findByIdAndRemove(id).exec();
   console.log("Message deleted")

      Webjade.find({}, function (err, docs) {
              if (err) {
                  return console.error(err);
              } else {
                 res.render('adminone', {"items":docs});
              }     
        });



})

module.exports=router;