var mongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var path = require('path');

var dbURL = process.env.MONGOURL || 'mongodb://localhost:27017/nl';

//Colletions
var col_users;

//Exported objects
var DBUsers = {};

//Init mongo connection
mongoClient.connect(dbURL, function(err, DB) {{
    assert.equal(null, err);
    console.log("Connected to mongo server: " + dbURL);

    //Create collections if non-existent
    //Users
    DB.createCollection('users', {
        validator: {
            $and: [
                {
                    username: {
                        $type: 'string'
                    }
                },
                {
                    password: {
                        $type: 'string'
                    }
                },
                {
                    email: {
                        $regex: /@/
                    }
                },
                {
                    usertype: {
                        $type: 'string'
                    }
                }
            ]
        },
        validationLevel: 'strict',
        validationAction: 'error'
    });

    //Init collections
    col_users = DB.collection('users');

    //Link collections to export objects
    require('./db/users')(DBUsers, col_users);
}});

//Export DB helper objects
module.exports = {
    Users: DBUsers
};