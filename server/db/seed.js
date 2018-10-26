const db = require('./index.js');
const PicStream = require('./PhotoStream.js');
const faker = require('faker');

const samplePic = {
  image: faker.image.imageUrl(),
  description: faker.lorem.words(),
  // listId: 'sample'
};

const generateRandomPics = () => {
  return samplePic;
};

const numPics = 100;
const picArray = [];

for (var i = 0; i < numPics; i++) {
  picArray.push(generateRandomPics());
  console.log(picArray, 'picArray in seed')
}

const insertSamplePics = function() {
  PicStream.create(picArray)
    .then(() => { db.disconnect(); });
};

insertSamplePics();