const express = require('express'); //packet web app to use request,respond
const path = require('path'); //path to directory
const router = express.Router(); //manage web request

router.get('/', function (request, respond) {
    respond.sendFile(path.join(__dirname + "/../views/home.html"));
});

module.exports = router; //export router