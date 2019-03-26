const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    username: { type: String, required: true },
    password: {type: String, required: true},
    shopping_list: [{ type: Schema.Types.ObjectId, ref: 'List' }],

});

const User = mongoose.model('User', UserSchema);

module.exports = User;