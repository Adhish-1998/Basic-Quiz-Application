const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId


const question = new mongoose.Schema({
    description : {type:String, require:true},
    type: {
        type: String,
        enum: ['single', 'multi']
    },
    difficulty:{
        type: String, 
        enum: [1,2,3,4,5,6,7,8,9,10]
    },
    options : [{value : String, isCorrect : Boolean}],
    quizId : [{type : ObjectId, ref: 'Quiz'}]
},{timestamps : true})

module.exports = mongoose.model('Question', question)