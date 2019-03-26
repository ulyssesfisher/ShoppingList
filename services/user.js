var User = require('../models/user');

exports.save = function(name, req, res) {
    User.create({ name: name }, function(err, user) {
        if (err) {
            res(err);
            return;
        }
        req(user);
    });
};

exports.list = function(req, res) {
    User.find(function(err, users) {
        if (err) {
            res(err);
            return;
        }
        req(users);
    });
};

exports.update = function(id, name, req, res) {
    User.findByIdAndUpdate(id, {name: name}, {new: true}, function(err, user) {
        if (err) {
            res(err);
            return;
        }
        req(user);
    });
};

exports.delete = function(id, req, res) {
    User.findByIdAndRemove(id, function(err, user) {
        if (err) {
            res(err);
            return;
        }
        req(user);
    });
};