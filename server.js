const express = require("express")
const app = express()
const userRoutes = require('./Routes/userRoute')
const bodyParser = require("body-parser")

//Integration And Setup 

function initilization_function() {
    initilize_bodyParser();
    initilize_ejs();
    initilize_Routes();
}
initilization_function();


function initilize_bodyParser() {
    app.use(bodyParser.urlencoded({ extended: true }))
}

function initilize_ejs() {
    app.set('view engine', 'ejs');
}

function initilize_Routes() {
    app.use('/user', userRoutes);
}



module.exports = app