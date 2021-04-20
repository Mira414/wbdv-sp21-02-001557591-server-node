const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()

const findQuestionById = (questionid) => questionsModel.findById(questionid)

const findQuestionsForQuiz = (qzid) => quizzesModel.findById(qzid)
    .populate('questions').then(quiz => quiz.questions)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz }