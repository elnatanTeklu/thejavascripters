alert("Hello, Welcome to PizzaHut. Let's customise your pizza.");

let receipt = "";
let price = 0;
receipt = "Pizza....................................................................$6.99<br>";
price += 6.99;

// choose topping
for (let i = 0; i < 3; i++){
    toppings(i+1);
}

// choose number
let num = prompt("How many do you want?");

receipt += "<h4>x " + num + "</h4>";

price *= num;

receipt += "<br><h3>Total:      "+ price +"<h3>"

document.getElementById("receipt").innerHTML = receipt;

function toppings(number){
    let val = prompt("Choose Your " + number + "st toppings: \n1.Pepperoni\n2.Onions\n3.Sausage\n4.Bacon\n5.Cheese\n6.Olive\n7.Mushrooms");
    switch(val){
        case "1":
            receipt += " Pepperoni............................................................$1.20";
            price += 1.2;
            break;
        case "2":
            receipt += " Onions.................................................................$0.80";
            price += 0.8;
            break;
        case "3":
            receipt += " Sausage................................................................$1.50";
            price += 1.5;
            break;
        case "4":
            receipt += " Bacon..................................................................$0.80";
            price += 0.8;
            break;
        case "5":
            receipt += " Cheese.................................................................$1.20";
            price += 1.2;
            break;
        case "6":
            receipt += " Oliva..................................................................$1.10";
            price += 1.1;
            break;
        case "7":
            receipt += " Mushrooms..............................................................$0.90";
            price += 0.9;
            break;
        default:
            break;
    }
    receipt += "<br>";
}