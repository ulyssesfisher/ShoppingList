const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    user_id: { type: String, required: true },
    product_id: {type: String},
});

const List = mongoose.model('List', ListSchema);

module.exports = List;


