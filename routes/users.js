var express = require('express');
var router = express.Router();
var mgdb = require('../modules/mginit');


/* GET users.js listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/add', function(req, res, next) {
    var userReq = new mgdb.models.User({
       username: req.body.username,
       password: req.body.password,
       email: req.body.email
    });

    userReq.save(function(err, user) {
        if (err) return res.json(err);
        return res.json(user);
    });
});

module.exports = router;
