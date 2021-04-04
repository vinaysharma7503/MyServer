const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController')


function initilization_function() {
    getRoutes();
    postRoutes();
}

initilization_function();



function getRoutes() {
    router.get('/login', userController.userLoginController)
    router.get('/registrationForm', userController.registrationForm)

}

function postRoutes() {
    router.post('/addRegistration', userController.addRegistrationController)
}

function putRoutes() {}

function patchRoutes() {}

function deleteRoutes() {}


module.exports = router;