const db = require('./index.js');
const PicStream = require('./photoStream.js');
const faker = require('faker');

var images = [
    'http://dummyimage.com/700x700.png/cc0000/ffffff',
    'http://dummyimage.com/700x700.jpg/5fa2dd/ffffff',
    'http://dummyimage.com/700x700.bmp/ef945b/000000',
    'http://dummyimage.com/700x700.bmp/a5a26f/000000',
    'http://dummyimage.com/700x700.bmp/99375c/ffffff',
    'http://dummyimage.com/700x700.bmp/1ca2ce/000000',
    'http://dummyimage.com/700x700.jpg/ac75d1/ffffff',
    'http://dummyimage.com/700x700.png/ff4444/ffffff',
    'http://dummyimage.com/700x700.bmp/75bab6/ffffff',
    'http://dummyimage.com/700x700.bmp/0f20db/ffffff'
];

var random = function(){
  return images[Math.floor(Math.random() * images.length)];
}

let generateRandomPics = () => {
   return {
      imageUrl: random(),
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