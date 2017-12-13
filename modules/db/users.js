var ObjectID = require('mongodb').ObjectID;

//Export helper methods to DBUsers
module.exports = function(DBUsers, col_users) {

    //Add user to DB
    DBUsers.add = function(query, callback) {
        col_users.insertOne(query, function(err, result) {
            if (err) {
                console.error("[DBUsers]", err.message);
                return callback({status: 'fail', message: '[Users] Add - MongoDB error'}, null);
            }
            if (result.result.n === 1 && result.result.ok === 1) {
                return callback(null, result.ops[0]._id);
            }
        });
    };

    DBUsers.delete = function(req, res, callback) {
        //TODO change to use obejct id
        var row = {
            username: req.body.username,
            password: req.body.password
        };

        col_users.deleteOne(row, function(err, result) {
            if (err) {
                console.error("[DBUsers]", err.message);
                callback({status: 'fail', message: '[Users] Delete - MongoDB error'});
            }
            if (result.result.n == 0) {
                callback(
                    {status: 'ok', message: '[Users] Delete - No user was deleted'},
                    {data: result.result}
                );
            } else {
                callback(
                    {status: 'ok', message: '[Users] Delete - Successfully deleted'},
                    {data: result.result}
                );
            }
        });
    }
};