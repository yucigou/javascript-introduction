"use strict";

var firstName = "Bob";
var lastName = "Smith";
var age = 29;

happyBirthdayLocal(firstName, lastName, age);
console.log(message);

function happyBirthdayLocal(first, last, a) {
	a = a + 1;
	message = "Happy Birthday to " + first + " " +
	last + " who just turned " + a;
}
