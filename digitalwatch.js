

    
var myFunction = () => {


 var now = new Date();
 var dname = now.getDay(),
   
     hou = now.getHours(),
     min = now.getMinutes(),
     sec = now.getSeconds(),

     pe = "AM";
     var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      if(hou >= 12){
       pe = "PM";
     }
     if(hou == 0){
       hou = 12;
     }
     if(hou > 12){
       hou = hou - 12;
     }
     if(hou < 10)
     {
         hou = '0' + hou;
     }
     if(min < 10)
     {
         min = '0' + min;
     }
     if(sec < 10)
     {
         sec = '0' + sec;
     }

var date = now. getDate();
var month = now. getMonth() + 1; // Since getMonth() returns month from 0-11 not 1-12.
var year = now. getFullYear();
var dateStr = date + "/" + month + "/" + year;

document.getElementById('fuldate').innerHTML = dateStr;
document.getElementById('dday').innerHTML = week[dname];
   document.getElementById('hour').innerHTML = hou;
   document.getElementById('minutes').innerHTML = min;
    document.getElementById('s').innerHTML = sec;
    setTimeout(myFunction,500);
    
  }

 
    myFunction();

  