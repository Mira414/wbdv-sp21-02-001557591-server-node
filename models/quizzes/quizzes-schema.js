const mongoose = require("mongoose")
// const questionModel = require("../questions/questions-model")

const quizzesSchema = mongoose.Schema({
        _id: String,
        title: String,
        questions: [{type: String, ref: "QuestionModel"}]
    // 下面的代码是将questions直接存储在quiz collection里，以提高读取效率，
    // 但仅当只有一个quiz包含这些questions，其他地方不会复用questions才能这样做
        // embeddedQuestions: [questionsSchema],
        // embeddedQuestions2: [{
        //     title: String,
        //     quizId: String,
        //     question: String,
        //     correct: String,
        //     type: {type: String, enum: ["TRUE_FALSE", "MULTIPLE_CHOICE"]},
        //     choices: [String]
        // }]

    },{collection : "quizzes"})

module.exports = quizzesSchema