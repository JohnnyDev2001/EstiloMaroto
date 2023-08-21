const mongoose = require('mongoose');
const {mongodb} = require('../config/database');

mongoose.connect(mongodb, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

module.exports = mongoose;