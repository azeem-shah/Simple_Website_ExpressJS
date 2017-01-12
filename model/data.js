var mongoose = require('mongoose');
mongoose.connect('mongodb://nazeem:indian@ds033126.mlab.com:33126/nazeem');
console.log('db connected');

var Schema = mongoose.Schema;

var Webjade = new Schema({
  
  email: {type: String, required: true},
  subject: {type: String, required: true},
  message: {type: String, required: true}
  
});

var Webjade = mongoose.model('Webjade', Webjade);

module.exports = Webjade;