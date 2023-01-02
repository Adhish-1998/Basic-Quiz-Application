const mongoose = require('mongoose')

const quizRegistration = mongoose.Schema({
    QuizHash: {type: String, require: true},
    email: { type: String, require: true,unique:true},
    Name: {type: String}
},{timestamps: true})

module.exports = mongoose.model('QuizRegistration', quizRegistration)