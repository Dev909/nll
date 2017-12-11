var express = require('express');
var router = express.Router();
var DB = require('../modules/dbinit');

/* GET users.js listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
    DB.Users.add(req, res, function(result) {
        res.json(result);
    });
});

module.exports = router;
