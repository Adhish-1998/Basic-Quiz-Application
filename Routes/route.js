const express = require('express')
const router = express.Router()
//const {authenticate, authorise } = require('../middleware/auth')
const {signup, login} = require('../Controller/user')
const {createQuiz,quizRegistration} = require('../controller/quiz')
const {addQuestion, getQuestions} = require('../Controller/question')


//-------------For USER------------------//
router.post("/signup", signup )
router.post("/login", login )

//-------------For Quiz-------------//
router.get("/generate/quiz", createQuiz )
router.post("/quiz/registration", quizRegistration)


//-------For Question----------//
router.post("/add/question", addQuestion )
router.get('/questions', getQuestions) 



router.all("/*", function (req, res) {
    res.status(404).send({
        status: false,
        message: "Make Sure Your Endpoint is Correct or Not!"
    })
})

module.exports = router