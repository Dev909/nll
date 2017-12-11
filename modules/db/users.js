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
            callback({status: 'fail'});
        }

        col_users.insert(row, function(err, result) {
            if (err) {
                console.error("[DBUsers]", err.message);
                callback({status: 'fail'});
            }
            callback({
                status: 'ok',
                data: result.ops[0]
            })
        });
    }
};