// model 自带对数据的CRUD

const mongoose = require("mongoose")

const quizzesSchema = require("./quizzes-schema")

const quizModel = mongoose.model("QuizModel", quizzesSchema)

module.exports = quizModel