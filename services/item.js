var Item = require('../models/item');

exports.save = function(name, req, res) {
    Item.create({ name: name }, function(err, item) {
        if (err) {
            res(err);
            return;
        }
        req(item);
    });
};

exports.list = function(req, res) {
    Item.find(function(err, items) {
        if (err) {
            res(err);
            return;
        }
        req(items);
    });
};

exports.update = function(id, name, req, res) {
    Item.findByIdAndUpdate(id, {name: name}, {new: true}, function(err, item) {
        if (err) {
            res(err);
            return;
        }
        req(item);
    });
};

exports.delete = function(id, req, res) {
    Item.findByIdAndRemove(id, function(err, item) {
        if (err) {
            res(err);
            return;
        }
        req();
    });
};