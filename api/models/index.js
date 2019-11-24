var mongoose = require('mongoose');
var Scan = require('./scan');

const connectDb = () => {
  return mongoose.connect(process.env.DB_HOST);
};

const models = { Scan };

module.exports = models, connectDb;