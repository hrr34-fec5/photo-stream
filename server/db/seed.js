const db = require('./index.js');
const PicStream = require('./PhotoStream.js');
const faker = require('faker');


let generateRandomPics = () => {
   return {
      imageUrl: faker.image.imageUrl(),
      description: faker.lorem.sentence(),
    };
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