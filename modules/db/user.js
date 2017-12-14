var mongoose = require('mongoose');

module.exports = function(mgdb) {
    var schemaUser = mongoose.Schema({
        username: String,
        password: String,
        email: String
    });

    return mgdb.model('User', schemaUser);
};