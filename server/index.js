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

app.get('/', (req, res) => {
  res.send('Placeholder text');
});

app.listen(port, () => console.log(`Listening on port: ${port}`));