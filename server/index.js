const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

const PicStream = require('./db/photoStream.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.options('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  res.set('Content-Type', 'application/json');
  res.sendStatus(200);
});

app.use(express.static(__dirname + '/../client/dist'));

app.get('/pictures', (req, res) => {
  PicStream.findPics((pics) => {
    // console.log('pics in get request', pics)
    pics = pics.slice(0,1);
    res.json(pics);
    res.end();
  })
});
app.get('/pictures:listingId', (req, res) => {
  let urlArr = req.url.split(':')[1];
  console.log('urlarr',urlArr)
  // urlArr === 'listingId' ? '5bdc9a89239c3205677493a5' : urlArr;
  if(urlArr === 'listingId') {
    urlArr = '5bdc9a89239c3205677493a2'
  } else {
    urlArr = urlArr;
  }
  PicStream.findPicsById(urlArr, (pics) => {
    console.log('pics in find by id func', pics);
    res.json(pics);
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}`));

//going to use this later for testing with enzyme and jest
//you can't just use the in line HTTP requests
// aka componentDidMount(){axio.get...blah blah blah...}
module.exports.app = app;