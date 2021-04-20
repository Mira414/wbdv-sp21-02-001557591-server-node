const quizAttemptService = require("../services/quiz-attempts-service")

module.exports = (app) => {

    const createQuizAttempt = (req, res) => {
        const quizId = req.params.quizId
        const attempts = req.body
        quizAttemptService.createAttempt(quizId, attempts)
            .then((attempt)=> res.send(attempt))
    }

    const findAttemptsForQuiz = (req, res) => {
        const qId = req.params.quizId
        quizAttemptService.findAttemptsForQuiz(qId)
            .then(attempts => res.send(attempts))
    }

    app.post("/api/quizzes/:quizId/attempts", createQuizAttempt)
    app.get("/api/quizzes/:quizId/attempts", findAttemptsForQuiz)
}