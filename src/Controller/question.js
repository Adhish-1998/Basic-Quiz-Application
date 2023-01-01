const question = require('../Models/question')
const quiz = require('../Models/quiz')

const addQuestion = async(req,res) =>{
    try{
        let quizId = await quiz.findOne({hash : req.body.quizId}).select({_id:1})
        req.body.quizId = quizId
        let data = await question.create(req.body)
        res.status(201).send({status:true, data: data})
    }
    catch(err){
        return res.status(500).send({ status: false, message: err.message })
    }
}

const getQuestions = async(req,res) =>{
    try{
        let questionList = await question.find()
        return res.status(200).send({status : true, data : questionList})
    }
    catch(err){
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports ={
    addQuestion,
    getQuestions
} 