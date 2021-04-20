const quizzesService = require('../services/quizzes-service')

module.exports = (app)=> {

    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes().then(quizzes =>{
            res.send(quizzes)
        })
        // res.send(quizzesService.findAllQuizzes(qid))
    }

    const findQuizById = (req, res) => {
        const qid = req.params['quizId']
        // res.send(quizzesService.findQuizById(qid))
        quizzesService.findQuizById(qid)
            .then(quiz => {
                res.send(quiz)
            })
    }

    app.get('/api/quizzes', findAllQuizzes)     //create GET HTTP endpoints to retrieve quizzes
    app.get('/api/quizzes/:quizId', findQuizById)
}

