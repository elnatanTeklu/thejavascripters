function arrow() {
    let apple = document.getElementById('arrow');
    apple.innerHTML = "&#xf0e0;";
    setTimeout(function () {
        apple.innerHTML = "&#xf2b6;";
    }, 1000);
}


// Run animation 
arrow();
// Run animation every 2 Seconds
setInterval(arrow, 2000);



function fastFoward() {
    let fast = document.getElementById('fastFoward');
    fast.innerHTML = "&#xf04b;";
    setTimeout(function () {
        fast.innerHTML = "&#xf04e;";
    }, 1000);
    setTimeout(function () {
        fast.innerHTML = "&#xf050;";
    }, 2000);
}

// Run animation 
fastFoward();
// Run animation every 2 Seconds
setInterval(fastFoward, 3000);



function people() {
    let people = document.getElementById('people');
    people.innerHTML = "&#xf007;";
    setTimeout(function () {
        people.innerHTML = "&#xf0c0;";
    }, 1000);
}

// Run animation 
people();
// Run animation every 2 Seconds
setInterval(people, 2000);


function toggle() {
    let toggle = document.getElementById('toggle');
    toggle.innerHTML = "&#xf204;";
    setTimeout(function () {
        toggle.innerHTML = "&#xf205;";
    }, 1000);
}

// Run animation 
toggle();
// Run animation every 2 Seconds
setInterval(toggle, 2000);