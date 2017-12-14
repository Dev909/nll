var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require('path');
var mongoose = require('mongoose');

var dbURL = process.env.MONGOURL || 'mongodb://localhost:27017/nll';

var mgdb = mongoose.createConnection(dbURL);

var modelUser = {};

mgdb.on('error', console.error.bind(console, 'connection error'));
mgdb.once('open', function() {
    modelUser = require('./db/user')(mgdb);
});

module.exports = mgdb;

