const mongoose = require('mongoose');
const env = require('../environment');
const config = require('./config');

mongoose.connect(config[env].url);