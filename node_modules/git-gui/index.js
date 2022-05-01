#!/usr/bin/env node


var express = require('express');
    

var bodyParser = require('body-parser');

var app = express();
var server = require('http').createServer(app);  


app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());



var reposController = require('./src/routes/repos.js');
// var containersController = require('./src/routes/containers.js');

app.use('/api/repos', reposController);
// app.use('/api/containers', containersController);
app.use(express.static('client'));



app.get('/*', function(req, res){
    res.sendFile(__dirname + '/client/index.html');
});

server.listen(process.env.PORT || 3300, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
