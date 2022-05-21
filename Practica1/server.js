//npm init
//npm install
//npm install express
//npm install mongoose
//npm install path
//npm install cors
//npm instal dotenv

var path = require("path");
var cors = require('cors');
var express = require ("express");
var pdf = require("./pdf");
const fs = require('fs');

var app = express();
app.use(express.static('public'));

app.listen(3000,function()
{
console.log('Escuchando puerto 3000');
})

app.get("/", (req, res)=>{
    return res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.use('/pdf', pdf);

app.get('/javapdf', function(req, res){
    res.download(path.join(__dirname, 'public', 'documents', 'S1 - JavaScript.pdf'),"Javascript Semana1.pdf");
})