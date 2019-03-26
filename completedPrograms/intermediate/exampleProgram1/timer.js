// count down to new Years
let newYears = new Date("Jan 1, 2020 0:0:0").getTime();


let x = setInterval(function() {

  // Get current date and time
let currentTime = new Date().getTime();
    
  // distance between currentTime  and New Years
  let distance = newYears - currentTime
    
  // days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // display to html 
  document.getElementById("timerDays").innerHTML = days + " Days ";

  document.getElementById("timer").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "Happy New Years";
  }
}, 1000); // every 1 second 