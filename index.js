var express = require("express"),
    app = express(),
    timeConvert = require('./public/scripts/timeconversion.js')

app.use(express.static('public'))

app.get('/', function(req, res){
    res.sendFile('index.html')
})

app.get('/:timestamp', function(req, res){
    var inputDate = req.params.timestamp
    var date = timeConvert.timeConvertion(inputDate)
    res.json(date)
})

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Server Running", process.env.PORT);
})
