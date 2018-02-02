"use strict";

function tempFtoC(tempF) {
	var tempC = (tempF - 32) * 5/9;
	return tempC;
}

var f = 32;
var tempC = tempFtoC(f);
console.log(f + "F is " + tempC + "C"); // 32F is 0C
