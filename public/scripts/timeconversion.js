 var moment = require('moment');

module.exports.timeConvertion = function(time) {
  var inputDate;
  if(/^\d{8,}$/.test(time)){
      inputDate = moment(time, 'X');
   } else {
      inputDate = moment(time, "MMMM D, YYYY");
   }

   if(inputDate.isValid()){
       return ({
           unix: inputDate.format("X"),
           natural: inputDate.format("MMMM D, YYYY")
       })
   } else{
       return {
           unix: null,
           natural: null
       }
   }
}