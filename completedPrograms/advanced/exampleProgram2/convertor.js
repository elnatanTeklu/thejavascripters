

// get input element from html 
document.getElementById("milesInput").addEventListener("input", function(e) {
    // take the input and multiple it by 1.609344
    let miles = e.target.value;
      document.getElementById("output").innerHTML = miles * 1.609344;
    
    });