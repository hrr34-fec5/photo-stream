const db = require('./index.js');
const PicStream = require('./photoStream.js');
const faker = require('faker');

let generateRandomPics = () => {
   return {
      imageUrl: faker.image.imageUrl(800,800),
      description: faker.lorem.sentence(),
    };
};

const randPicAmount = () => {
  return Math.floor(Math.random() * 15);
}

const numPics = 5;
const picArray = [];
let x = 0;

// while(x < numPics) {
//   let rand = randPicAmount();
//   if(rand < 5) {
//     rand = 5;
//   }
//   let temp = [];
//   for(var i = 0; i < rand; i++) {
//     temp.push(generateRandomPics());
//   }
//   picArray.push(temp);
//   console.log('picarray in while loop', picArray)
//   temp = [];
//   x++;
// }

for (var i = 0; i < numPics; i++) {  
  picArray.push(generateRandomPics());
}

const insertSamplePics = function() {
    PicStream.create(picArray)
    .then(() => { db.disconnect(); });
};

insertSamplePics();