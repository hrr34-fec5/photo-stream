const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const port = 8081;

const PicStream = require('./db/photoStream.js');
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(`${__dirname}/../client/dist`));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(__dirname + '/../client/dist'));

app.get('/listing/:id', (req, res) => {
  
  //loading specific HTML file when address is typed in
  //once this loads everything, a second get request will be made below to actually render everything
  console.log('this is being sent hopefully');
  const file = path.join(`${__dirname}/../client/dist/index.html`);
  res.sendFile(file);
});
app.get('/listing/data/:id', (req, res) => {
  // console.log('req.params',req.params)
  // let urlArr = req.params;
  let urlArr = req.url.split(':')[1];
  console.log('urlarr',urlArr)
  // urlArr === 'listingId' ? '5bdc9a89239c3205677493a5' : urlArr;
  if(urlArr === undefined || urlArr === null) {
    urlArr = '3'
  } else {
    urlArr = urlArr;
  }
  PicStream.findPicsById(urlArr, (pics) => {
    console.log('pics in find by id func', pics);
    res.status(200).send(pics);
  })
})

app.listen(port, () => console.log(`Listening on port: ${port}`));

//going to use this later for testing with enzyme and jest
//you can't just use the in line HTTP requests
// aka componentDidMount(){axio.get...blah blah blah...}
module.exports.app = app;