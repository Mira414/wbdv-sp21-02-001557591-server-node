const mongoose = require("mongoose")

const questionsSchema = mongoose.Schema({
        _id: String,
        title: String,
        quizId: String,
        question: String,
        correct: String,
        answer: String,
        //{type:String, enum:...}这里的type是指后面当前字段的数据类型
        type: { type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE", "FILL_BLANKS"]},
        choices: [String]
    },{collection : "questions"})

module.exports = questionsSchema