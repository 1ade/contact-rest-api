var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  company: String,
  photo: String,
  phone: Array,
  address: Array,
  url: Array,
  email: Array
});

module.exports = mongoose.model('Contact', ContactSchema);
