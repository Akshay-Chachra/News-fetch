import React, { useEffect, useState } from "react";

function WorldClock() {
const [time, setTime] = useState("");
    const date = new Date() 
    var hours = date.getHours()
    if(hours<10){
        hours = "0" + hours
    }
    var minutes = date.getMinutes()
    if(minutes<10){
        minutes = "0" + minutes
    }
    var seconds = date.getSeconds()
    if(seconds<10){
        seconds = "0" + seconds
    }

    var day = date.getDay()
    var weekDays = Array(7);
    weekDays[0] = "Sunday";
    weekDays[1] = "Monday";
    weekDays[2] = "Tuesday";
    weekDays[3] = "Wednesday";
    weekDays[4] = "Thursday";
    weekDays[5] = "Friday";
    weekDays[6] = "Saturday";
    var today = weekDays[day];

    var  months = date.getMonth()
    var month = Array(12);
    month[0] = "January";
    month[1] = "Feburary";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var currentDate = date.getDate()
    var currentYear = date.getFullYear()
    var currentMonth = month[months]
    setTimeout(()=>{
        setTime(hours + " :" + minutes + " :" + seconds)
    },1000)
  return(
   
        <div className="dayandtime collapse navbar-collapse" id="navbarSupportedContent">
            <p className="clock">{currentDate}-{currentMonth}-{currentYear}</p>
            <p className="clock">{today}</p>
            <p className="clock">{time}</p>
            
            
        </div>
   
  )
}
export default WorldClock;
