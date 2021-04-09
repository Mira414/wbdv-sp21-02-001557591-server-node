
let quizzes = require('./quizzes.json');    //quizzes declared in separate file, import here

const findAllQuizzes =()=>{
    return quizzes
}

const findQuizzesById =(quizId)=>{
    return quizzes.find(quiz =>
        quiz._id === quizId
    )
}

// console.log(findAllQuizzes())


const updateQuiz =()=>{}
const createQuiz =()=>{}
const deleteQuiz =()=>{}

module.exports = {
    findAllQuizzes,
    findQuizzesById,
    updateQuiz,
    createQuiz,
    deleteQuiz
}