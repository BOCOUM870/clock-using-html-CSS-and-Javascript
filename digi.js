function updateclock(){
    let now= new Date()
    let minutes=now.getMinutes();
    let hours=now.getHours()
    let seconds=now.getSeconds();
    hours=hours < 10 ? "0"+hours: hours;
    minutes=minutes< 10 ? "0"+ minutes: minutes;
    seconds=seconds< 10 ? "0"+ seconds: seconds;
    const hourselement=document.getElementById("hour");
    const minuteselement=document.getElementById("minute");
    const secondselement=document.getElementById("second");
    minuteselement.textContent=minutes;
    hourselement.textContent=hours;
    secondselement.textContent=seconds;
}

setInterval(updateclock,1000);