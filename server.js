const express = require('express')
const app = express()

const mongoose = require('mongoose');
require('dotenv').config()
// mongoose.connect('mongodb://localhost:27017/whiteboard-02',
const uri = process.env.MONGODB_URI;
console.log(uri)
mongoose.connect(process.env.MONGODB_URI,
    {useNewUrlParser: true, useUnifiedTopology: true});

//解析json body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers',
        'Content-Type, X-Requested-With, Origin');
    res.header('Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    next();
});



const demo = require('./controllers/demos-controller')
demo(app);

const quizzesController = require('./controllers/quizzes-controller')
quizzesController(app)

require('./controllers/questions-controller')(app)
require('./controllers/quiz-attempts-controller')(app)

app.listen(process.env.PORT || 4000);