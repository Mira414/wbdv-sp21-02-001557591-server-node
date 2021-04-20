let questions = require('./questions.json') //questions declared in separate file, import here

// const questionModel = require("../models/questions/questions-model")
const questionsDao = require('../daos/questions-dao')

const findAllQuestions = ()=>{
    // return questions
    // return questionModel.find()
    return questionsDao.findAllQuestions()
}

const findQuestionsById = (questionId)=>{
    // return questions.find(question=> question._id === questionId)
    // return questionModel.findById(questionId)
    return questionsDao.findQuestionById(questionId)
}

const findQuestionsForQuiz = (qId)=>{
    // return questions.filter(question => question.quizId === qId)
    // return questionModel.find({quizId: qId})
    return questionsDao.findQuestionsForQuiz(qId)
}

const createQuestion = ()=>{}
const createQuestionForQuiz = ()=>{}

const updateQuestion = ()=>{}
const deleteQuestion = ()=>{}

module.exports = {
    findAllQuestions,
    findQuestionsById,
    findQuestionsForQuiz,
    createQuestion,
    createQuestionForQuiz,
    updateQuestion,
    deleteQuestion
}