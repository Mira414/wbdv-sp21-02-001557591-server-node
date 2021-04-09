let questions = require('./questions.json') //questions declared in separate file, import here

const findAllQuestions = ()=>{
    return questions
}

const findQuestionsById = (questionId)=>{
    return questions.find(question=> question._id === questionId)
}

const findQuestionsForQuiz = (qId)=>{
    return questions.filter(question => question.quizId === qId)
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