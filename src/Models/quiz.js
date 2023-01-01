const mongoose = require('mongoose')

const quiz = mongoose.Schema({
    hash: {type: String, require: true},
    count : {type : Number}
},{timestamps: true})

module.exports = mongoose.model('Quiz', quiz)