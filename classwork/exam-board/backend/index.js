var express = require('express');
var app = express();
app.use(express.json());
var cors = require('cors');

app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
  }))

app.post('/post', function(request, response){
  console.log(request.body);      // your JSON
   response.send(request.body);    // echo the result back
});

app.get('/get', function(request, response){
    console.log({f:1});      // your JSON
     response.send({f:1});    // echo the result back
})

app.listen(3001);
