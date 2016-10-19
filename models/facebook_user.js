const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user = new Schema({
  name:String,
  id:String
})

const ModelClass = mongoose.model('facebook_user',user);

module.exports = ModelClass;
