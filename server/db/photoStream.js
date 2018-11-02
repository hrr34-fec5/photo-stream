const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const picSchema = new mongoose.Schema({
    imageUrl: [String],
    description: [String],
});

const PicStream = mongoose.model('PicStream', picSchema);

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
  PicStream.findById(id, (err, resp) => {
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