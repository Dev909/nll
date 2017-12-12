var ObjectID = require('mongodb').ObjectID;

//Export helper methods to DBUsers
module.exports = function(DBUsers, col_users) {

    //Add user to DB
    DBUsers.add = function(req, res, callback) {
        var row = {
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
            usertype: 'user'
        };

        if (Object.keys(row).length !== 4) {
            console.warn("[DBUsers] Add", "Not enough parameters (" + Object.keys(row).length + ")");
            callback({status: 'fail', message: '[Users] Add - Not enough parameters'});
        }

        col_users.insert(row, function(err, result) {
            if (err) {
                console.error("[DBUsers]", err.message);
                callback({status: 'fail', message: '[Users] Add - MongoDB error'});
            }
            callback({
                status: 'ok',
                message: '[Users] Add - Successful'},
                {data: result.ops[0]}
            );
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