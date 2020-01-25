var mongoose = require('mongoose');
// Setup schema
var userScehma = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    active: {
        type: Boolean,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export User model
var User = module.exports = mongoose.model('user', userScehma);
module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}