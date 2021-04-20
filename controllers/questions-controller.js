module.exports = (app)=>{

    const questionService = require('../services/questions-service')

    const findAllQuestions =(req, res)=>{
        // res.send(questionService.findAllQuestions())
        questionService.findAllQuestions().then(questions => res.send(questions))
    }

    const findQuestionById =(req, res)=>{
        const quesId = req.params['questionId']
        // res.send(questionService.findQuestionsById(quesId))
        questionService.findQuestionsById(quesId).then(question => res.send(question))
    }

    const findQuestionsForQuiz = (req, res) =>{
        const qId = req.params['quizId']
        // res.json(questionService.findQuestionsForQuiz(qId))
        questionService.findQuestionsForQuiz(qId).then(questions => res.send(questions))
    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:questionId', findQuestionById)
    app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz)
}