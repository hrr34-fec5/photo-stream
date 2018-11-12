require('dotenv').config();
const mongoose = require('mongoose');

const db = mongoose.connect('mongodb://patdoyle:grounded1@ds155903.mlab.com:55903/photostream');

module.exports = db;