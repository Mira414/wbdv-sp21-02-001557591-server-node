// const quizAttemptsModel = require('../models/quiz-attempt/quiz-attempts-model')
const quizAttemptDao = require("../daos/quiz-attempts-dao")

const findAttemptsForQuiz = (qzid) =>
    quizAttemptDao.findAttemptsForQuiz(qzid)

const createAttempt = (qid, attempts) =>
    quizAttemptDao.createAttempt(qid, attempts)

module.exports = {
    createAttempt,
    findAttemptsForQuiz
}