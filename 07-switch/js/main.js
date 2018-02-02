"use strict";

var coffee = window.prompt("Enter your coffee order: ");
var price = 0;
switch(coffee) {
	case null:
	case "":
	console.log("Ordered cancelled");
	break;
	case "Dark Roast":
	case "House Blend":
	price = 1.29;
	console.log("Got your order, 1", coffee);
	break;
	case ("Espresso"):
	price = 1.89;
	console.log("Got your order, 1", coffee);
	break;
	default:
	console.log("You didn't enter a valid order");
}

if (price > 0) {
	console.log("You ordered", coffee, " for a total of $" + price);
}

