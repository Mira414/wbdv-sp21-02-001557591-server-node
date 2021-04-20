// model 自带对数据的CRUD

const mongoose = require("mongoose")

const quizAttemptSchema = require("./quiz-attempts-schema")

const quizAttemptsModel = mongoose.model("QuizAttemptModel", quizAttemptSchema)

module.exports = quizAttemptsModel