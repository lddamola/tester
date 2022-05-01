const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

// HOME CODE BELOW

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
}); 

app.post('/', (req, res) => {
let first = req.body.fname
let last = req.body.lname
res.write( " YOUR NAME IS " + first + " " + last )
res.send();
  }); 

  // CALCULATOR CODE BELOW

app.get('/calc', (req, res) => {
res.sendFile(__dirname + '/calculator.html')
}); 
  
app.post('/calc', (req, res) => {
let number1 = Number(req.body.num1)
let number2 = Number(req.body.num2)
res.write( "The Total is " + number1 + number2)
res.send();
});

// LIFE IN WEEKS CODE BELOW 
app.get('/life', (req, res) => {
res.sendFile(__dirname + '/lifeInWeeks.html')
}); 
        
        
app.post('/life', (req, res) => {
let years = Number(req.body.years)
let months = Number(req.body.weeks)
let yearsTotal = years * 52
let monthsTotal = months * 4
let totalWeeks = yearsTotal + monthsTotal
res.write( " YOU ARE  " + totalWeeks + " WEEKS OLD ")
res.send();
  }); 

  // DICE GAME BELOW
app.get('/diceGame', (req, res) => {
res.sendFile(__dirname + '/diceGame.html')
 }); 
                      

//  BMI CODE BELOW 
app.get('/bmi', (req, res) => {
res.sendFile(__dirname + '/bmi.html')
}); 
  
app.post('/bmi', (req, res) => {
let weight = Number(req.body.weight) * 703
let feet = Number(req.body.feet) * 12
let inch = Number(req.body.inch)
let height = feet + inch
let bmiHeight = height * height
let bmi = weight / bmiHeight
res.write( "The BMI is " + bmi)
res.send();
}); 


// app.post('/life', (req, res) => {
// let years = Number(req.body.years)
// let months = Number(req.body.weeks)
// let yearsTotal = years * 52
// let monthsTotal = months * 4
// let totalWeeks = yearsTotal + monthsTotal
// res.write( " YOU ARE  " + totalWeeks + " WEEKS OLD ")
// res.send();
  // }); 


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})