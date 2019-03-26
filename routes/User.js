const express = require('express');
const User = require('../services/user');
const router = express.Router();

router.get('/users', function(req, res) {
    User.list(function(users) {
        res.json(users);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.post('/users', function(req, res) {
    User.save(req.body.name, function(user) {
        res.status(201).json(user);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.put('/users/:id', function(req, res) {
    User.update(req.params.id, req.body.name, function(user) {
        res.status(200).json(user);
    }, function(err) {
        res.status(400).json(err);
    });
});

router.delete('/users/:id', function(req, res) {
    User.delete(req.params.id, function() {
        res.status(200).json({"message": "User Deleted"});
    }, function(err) {
        res.status(400).json(err);
    });
});

module.exports = router;