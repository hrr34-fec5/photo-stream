const mongoose = require('mongoose');
const db = require('./index.js');
// var autoIncrement = require('mongoose-auto-increment');
mongoose.Promise = global.Promise;

// autoIncrement.initialize(connection);

const picSchema = new mongoose.Schema({
    imageUrl: [String],
    description: [String],
    listingId: Number
});

// picSchema.plugin(autoIncrement.plugin, 'PicStream');

var PicStream = mongoose.model('PicStream', picSchema);

const findPics = (callback) => {
  PicStream.find((err, resp) => {
    if (err) {
      console.log(err);
    } else {
      callback(resp);
    }
  });
}

const findPicsById = (id, callback) => {
  console.log('id inside find query --------->',id)
  PicStream.findOne({listingId: id}, (err, resp) => {
    if (err) {
      console.log('An error has occurred.');
    } else {
      console.log('rep in find ------->', resp)
      callback(resp);
    }
  })
}

module.exports = PicStream;
module.exports.findPics = findPics;
module.exports.findPicsById = findPicsById;