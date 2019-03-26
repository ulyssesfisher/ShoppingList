var Item = require('../models/item');

exports.run = function(res, req) {
    Item.create({name: 'Broad beans'},
                {name: 'Tomatoes'},
                {name: 'Peppers'}, function(err, items) {
        if (err) {
            req(err);
            return;
        }
        res(items);
    });
};

if (require.main === module) {
    require('./connect');
    exports.run(function() {
        var mongoose = require('mongoose');
        mongoose.disconnect();
    }, function(err) {
        console.error(err);
    });
}