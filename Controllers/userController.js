exports.userLoginController = (req, res) => {
    console.log("dddddd");

}


exports.registrationForm = (req, res) => {
    res.render('registration', { foo: 'FOO' });
}

exports.addRegistrationController = (req, res) => {
    console.log("ddddd@@@@@", req.body);
    res.redirect('registrationForm')
}