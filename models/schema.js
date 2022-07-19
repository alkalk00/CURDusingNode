const mongoose = require('mongoose');

var nameschema = new mongoose.Schema({
    Username: {
        type: String,
    },
    Password : {
        type: String,
    }
})

var User = mongoose.model("User", nameschema);
module.exports = User