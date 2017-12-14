var express = require('express');
var router = express.Router();
var mgdb = require('../modules/mginit');


/* GET users.js listing. */
router.get('/findById', function(req, res, next) {
    mgdb.models.User.findById(req.body._id, function(err, r) {
       if (err) return res.json(err);
       return res.json(r);
    });
});

router.get('/find', function(req, res, next) {
    mgdb.models.User.find(req.body, function(err, r) {
        if (err) return res.json(err);
        return res.json(r);
    });
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

router.delete('/delete', function(req, res, next) {
    mgdb.models.User.remove({_id: req.body._id}, function(err, r) {
        if (err) return res.json(err);
        return res.json(r);
    });
});


module.exports = router;
