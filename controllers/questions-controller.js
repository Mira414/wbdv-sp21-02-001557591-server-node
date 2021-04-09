module.exports = (app)=>{

    const questionService = require('../services/questions-service')

    const findAllQuestions =(req, res)=>{
        res.send(questionService.findAllQuestions())
    }

    const findQuestionById =(req, res)=>{
        const quesId = req.params['questionId']
        res.send(questionService.findQuestionsById(quesId))
    }

    const findQuestionsForQuiz = (req, res) =>{
        const qId = req.params['quizId']
        res.json(questionService.findQuestionsForQuiz(qId))
    }

    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:questionId', findQuestionById)
    app.get('/api/quizzes/:quizId/questions', findQuestionsForQuiz)
}