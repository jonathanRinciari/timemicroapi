var express = require("express"),
    app = express(),
    moment = require('moment');

app.use(express.static('public'))
app.get('/', function(req, res){
    res.sendFile('index.html')
})

app.get('/:timestamp', function(req, res){
    var inputDate;
   if(/^\d{8,}$/.test(req.params.timestamp)){
       inputDate = moment(req.params.timestamp, 'X');
   } else {
       inputDate = moment(req.params.timestamp, "MMMM D, YYYY");
   }

   if(inputDate.isValid()){
       res.json({
           unix: inputDate.format("X"),
           natural: inputDate.format("MMMM D, YYYY")
       })
   } else{
       res.json({
           unix: null,
           natural: null
       })
   }
})

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Testing");
})
