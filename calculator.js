
const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/calc', (req, res) => {
    res.sendFile(__dirname + '/calculator.html')
}); 
  
app.post('/calc', (req, res) => {
      let number1 = Number(req.body.num1)
      let number2 = Number(req.body.num2)
      res.write( "The Total is " + number1 + number2)
      res.send();
        });

app.listen(port, () => {
console.log(`Example app listening on port ${port}`)
});