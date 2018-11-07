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
    'http://dummyimage.com/700x700.bmp/0f20db/ffffff',
    'http://dummyimage.com/700x700.bmp/666f7f/ffffff',
    'http://dummyimage.com/700x700.bmp/40157c/ffffff',
    'http://dummyimage.com/700x700.bmp/efca10/ffffff',
    'http://dummyimage.com/700x700.bmp/841903/ffffff',
    'http://dummyimage.com/700x700.bmp/e544ea/ffffff',
];

var randomPicArray = function(){
  var result = new Array();
  var amount = faker.random.number({min:5, max:15});
  for(var i = 0; i < amount; i++) {
    result.push(images[i]);
  }
  return result;
}

var idCount = 0;

let generateRandomPics = () => {
  var picArray = randomPicArray();
  var descriptionArr = []
  for(var i = 0; i < picArray.length; i++) {
    descriptionArr.push(faker.lorem.sentence())
  }
  idCount += 1;
   return {
      imageUrl: picArray,
      description: descriptionArr,
      listingId: idCount
    };
};

//change this to 100 for production
const numPics = 100;
const picArray = [];


for (var i = 0; i < numPics; i++) {  
  picArray.push(generateRandomPics());
}

const insertSamplePics = function() {
    PicStream.create(picArray)
    .then(() => { db.disconnect(); });
};

insertSamplePics();