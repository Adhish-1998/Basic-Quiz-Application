const quiz = require('../Models/quiz')
const registration = require('../Models/quizRegistration')


const createQuiz = async (req, res) => {
    try {
        let unique = Math.random().toString(27).slice(2, 8)
        let data = await quiz.create({ hash: unique })
        return res.status(201).send({ status: true, data: data })
    } catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const quizRegistration = async (req,res) =>{
    try{
        let data = await registration.create(req.body)
        return res.status(201).send({status : true, data : data})
    }catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports ={
    createQuiz,
    quizRegistration
} 