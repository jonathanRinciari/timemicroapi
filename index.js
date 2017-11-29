var express = require("express"),
    app = express(),
    moment = require('moment');
    
app.use(express.static('public'))

app.get('/:id', function(req, res){
    var time = req.params.id
    if(moment(time, 'MMMM-DD-YYYY')){
        res.send(time)
    } else {
        res.send('nope')
    }
})

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("Testing")  
})ing")  
})