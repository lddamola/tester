const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))


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
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })