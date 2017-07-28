var express = require('express');
var app = express();
var multer = require("multer");
var storage = multer.memoryStorage();
var fileUpload = multer({storage: storage});

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.post("/get-size", function (request, response) {
  fileUpload.single("uploadFile")(request, response, function(err){
  if(!err && request.file){
    response.send({file: request.file.size});
  }
  else{
    response.send({Error: "Error"});
  }
  });
});

var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});