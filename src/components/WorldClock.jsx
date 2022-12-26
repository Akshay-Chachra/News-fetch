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

    setTimeout(()=>{
        setTime(hours + " :" + minutes + " :" + seconds)
    },1000)
  return(
   
        <h6 className="clock">{time}</h6>
   
  )
}
export default WorldClock;
