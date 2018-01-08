function updateFtn() {
	var firstName = document.getElementById("firstName").value;
	document.getElementById("name").innerHTML = firstName;
}

document.getElementById("firstName").addEventListener("keyup", updateFtn);

/*
References:
https://www.w3schools.com/jsref/event_onkeyup.asp
https://www.w3schools.com/jsref/met_document_getelementbyid.asp
https://www.w3schools.com/jsref/prop_html_innerhtml.asp
*/