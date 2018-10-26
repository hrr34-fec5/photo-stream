const mongoose = require('mongoose');
const mongoUri = ('mongodb://localhost/pictures');

const db = mongoose.connect(mongoUri);

module.exports = db;