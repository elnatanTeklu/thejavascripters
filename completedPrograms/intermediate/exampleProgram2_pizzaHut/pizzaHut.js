alert("Hello, Welcome to PizzaHut. Let's customise your pizza.");

let receipt = "";
let price = 0;

let val = prompt("Choose Your 1st toppings: \n1.Pepperoni\n2.Onions\n3.Sausage\n4.Bacon\n5.Cheese\n6.Olive\n7.Mushrooms");
switch(val){
    case "1":
        receipt += " Pepperoni..............................................................$1.40";
        price += 1.4;
        break;
    case "2":
        receipt += " Onions.................................................................$0.80";
        price += 0.8;
    default:
        break;
}


console.log(receipt);
document.getElementById("receipt").innerHTML = receipt;

