const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send('Hello World')
})
app.get('/students', function (req, res) {
  var student = [
    {id: 1, name: "houssam" },
    {id: 2, name: "ali" },
    {id: 3, name: "ahmad" },
    {id: 4, name: "elia" }
  ]
  res.send(student)
  
})

app.listen(PORT)