const express = require('express')
const bodyParser = require('body-parser')

const PORT = 3000
const api = require('./routes/api')
const app =express()
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
app.use(bodyParser.json())

app.use('/api', api )

app.get('/',function(req,res){
res.send('bla bla bla')})

app.listen(PORT, function(){
    console.log('server running on port: '+ PORT)
})