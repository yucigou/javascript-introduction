"use strict";

var coffee = prompt("Enter your coffee order: ");
var price = 0;

if (coffee == null || coffee == "") {
	console.log("Ordered cancelled");
} else if (coffee == "Dark Roast" || coffee == "House Blend") {
	price = 1.29;
	console.log("Got your order, 1", coffee);
} else if (coffee == "Espresso") {
	price = 1.89;
	console.log("Got your order, 1", coffee);
} else {
	console.log("You didn't enter a valid order");
}

if (price > 0) {
	console.log("You ordered", coffee, " for a total of $" + price);
}

