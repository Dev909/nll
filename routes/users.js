var express = require('express');
var router = express.Router();
var DB = require('../modules/dbinit');

/* GET users.js listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
    DB.Users.add(req, res, function(err, result) {
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
