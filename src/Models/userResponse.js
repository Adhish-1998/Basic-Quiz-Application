const mongoose = require('mongoose')

const userResponse = mongoose.Schema({
    QuizHash: {type: String, require: true},
    email: { type: String, require: true,unique:true},
    Name: {type: String},
    questionId : {type: mongoose.Schema.Types.ObjectId, ref: 'Question'},
    isCorrect: {type: Boolean},
    netMarks: {type: Number}
},{timestamps: true})

module.exports = mongoose.model('userResponse', userResponse)