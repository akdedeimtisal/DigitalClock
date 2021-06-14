setInterval(showTime, 1000);
function showTime() {
    /*Creating time object from date class and 
    we get the current time*/
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    am_pm = "AM";
    
    //If hour is greater than 12 we select pm.
    if(hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }
    //If hour is less than 12 we select am.
    if(hour == 0) {
        hr = 12;
        am_pm = "AM";
    }
    
    let currentTime = hour + ":" + min + ":" + sec + am_pm;
    
    document.getElementById("clock").innerHTML = currentTime;

}
showTime();
