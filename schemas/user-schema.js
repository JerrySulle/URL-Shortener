const mongoose = require('mongoose')

const File = mongoose.Schema({
    url: String,
    key: String,
})

module.exports = mongoose.model('user', File)