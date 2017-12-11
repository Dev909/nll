var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require('path');

var dbURL = process.env.MONGOURL || 'mongodb://localhost:27017';

console.log("Running mongoDB at: " + dbURL);