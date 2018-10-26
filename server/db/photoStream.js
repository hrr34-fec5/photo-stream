const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const picSchema = new mongoose.Schema({
  imageUrl: String,
  description: String,
  listId: Number,
});

const PicStream = mongoose.model('PicStream', picSchema);

module.exports = PicStream;