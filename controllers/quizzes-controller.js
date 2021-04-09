const quizzesService = require('../services/quiz-service')

module.exports = (app)=> {

    const findAllQuizzes = (req, res) => {
        res.send(quizzesService.findAllQuizzes())
    }

    const findQuizzesById = (req, res) => {
        const qid = req.params['quizId']
        res.send(quizzesService.findQuizzesById(qid))
    }

    app.get('/api/quizzes', findAllQuizzes)     //create GET HTTP endpoints to retrieve quizzes
    app.get('/api/quizzes/:quizId', findQuizzesById)
}

