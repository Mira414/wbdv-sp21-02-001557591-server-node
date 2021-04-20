
let quizzes = require('./quizzes.json');    //quizzes declared in separate file, import here

// const quizModel  = require("../models/quizzes/quizzes-model")

const quizzesDao = require("../daos/quizzes-dao")
const findAllQuizzes =()=>{
    // return quizzes
    // return quizModel.find()
    return quizzesDao.findAllQuizzes()
}

const findQuizById =(quizId)=>{
    // return quizzes.find(quiz =>
    //     quiz._id === quizId
    // )
    // return quizModel.findById(quizId)
    // return quizModel.findById(quizId).populate("questions").exec()
    return quizzesDao.findQuizById(quizId)
}

const updateQuiz =()=>{}
const createQuiz =()=>{}
const deleteQuiz =()=>{}

module.exports = {
    findAllQuizzes,
    findQuizById,
    updateQuiz,
    createQuiz,
    deleteQuiz
}