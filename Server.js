const express = require('express')
const app = express()
const port = process.env.VCAP_APP_PORT || 5000
app.get('/test', (req, res) => { 
    console.log("howareyou!")
    console.log(req.query.user)
    res.send("hellooooooooooo" + '' + req.query.test1) 
})

app.get('/weather',(req , res ) =>{
    var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://api.openweathermap.org/data/2.5/weather?q=Kolkata&appid=5a06b8ea8b5943516c18e0c25cee3461&units=metric',
  'headers': {
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

})
app.listen(port, () => {
     console.log('Server is running on port5000') 
    })
    console.log("welcomeZAPYard");
