const mongoose = require("mongoose")

const questionSchema = require("./qusetions-schema")

const questionModel = mongoose.model("QuestionModel", questionSchema)

module.exports = questionModel