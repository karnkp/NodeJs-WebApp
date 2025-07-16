//รับrequestจากrouter เรียกmodelทำงาน แล้วจะให้ผลแสดงไหน
const { response } = require('express');
const Multiply = require('../models/multiplyModel');

var me = "Kittipum Wuttisak"

exports.getBasicMultiply = (request, response) => {
    //console.log(request)
    var answer = Multiply.getIntMultiply(
        request.query.num1, request.query.num2);//query from html
    
        response.render('multiplyResult', {answer, me});//sent result to file'multiplyResult.ejs'
}

exports.getAdvanceMultiply = (request, response) => {
    var answer;
    if (request.params.multiplyMethod == "large"){
        answer = Multiply.getLargeIntMultiply(request.query.num1, request.query.num2)
    }else if (request.params.multiplyMethod == "russian"){
        answer = Multiply.getRussuanMultiply(request.query.num1, request.query.num2)
    }

    response.render('multiplyResult', {answer, me});
}
