const express = require('express'); //express packet
const homeRouter = require('./routers/homeRouter');
const port = 4316; //port number

const app = express(); //express packet

app.use('/', homeRouter);

app.set('view engine', 'ejs');
const timeRouter = require('./routers/multiplyRouter');
app.use('/multiply', timeRouter); //timeเรียกmultiplyRouter บอกMuliControlerทำงาน เรียกmodelมาคำนวน

const productRouter = require('./routers/dbProductRouter');
app.use('/product', productRouter);

var server = app.listen(port, '127.0.0.1', function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Multiplication app is deployed at ' + host + ':' + port );
}) 
//@ terminal
//$ bash
// ls cd เข้าไปในfolder
//npm init -y 
//npm install express path 
//npm install ejs 
//node app 

//ถ้าจะแก้ ctrl c
//node app