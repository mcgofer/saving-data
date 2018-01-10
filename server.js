
// var express = require('express');
// var app = express();
// app.use(express.static('public'));
// app.use(express.static('node_modules'));
// app.get('/', function (request, response) {
//     response.send("I'm working");
// });

// var fs = require('fs');
// var data = { name : "Hadas", job : "queen" };
// var filepath = "test.txt";
// fs.writeFile(filepath, JSON.stringify(data), function(err) {
//     if (err) throw err;
//     console.log("The file was succesfully saved!");
// }); 
// fs.readFile("test.txt", 'utf8', function(err, data) {
//     if (err) throw err;
//     console.log(data);
//   });
// app.listen(3000);


var fs = require('fs');
var express = require("express");
var bodyParser = require('body-parser');   //add this line

var app = express();

app.use(bodyParser.json());  //add this line
app.use(bodyParser.urlencoded({ extended: false }));   //add this line

app.use(express.static('public'));
app.use(express.static('node_modules'));

app.get("/file", function(req, res){
  fs.readFile("test.txt", 'utf8', function(err, data){
    if (err) throw err;
    res.send(data);
  });
});

app.post("/file", function(req, res) {
    console.log(req.body);
    fs.writeFile('test.txt', JSON.stringify(req.body), function(err) {
      if (err) throw err;
      else console.log('Data saved to file!');
    });
  });

app.listen(3000);
