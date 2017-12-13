var express = require('express');
var router = express.Router();
var DB = require('../modules/dbinit');

/* GET users.js listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
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
    DB.Users.add(row, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

router.delete('/delete', function(req, res, next) {
    DB.Users.delete(req, res, function(err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

module.exports = router;
