"use strict";

function callWebService(url, callback) {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var results = JSON.parse(this.response);
			callback(this.response);
		}
	};

	console.log("Search API: " + url);
	xhttp.open("GET", url, true);
	xhttp.send();
}

function search() {
	var queryString = document.getElementById("queryString").value;
	if (!queryString) {
		alert("Please input your query, such as dna, rna, etc.");
		return;
	}
	var url = "https://www.ebi.ac.uk/europepmc/webservices/rest/search?format=json&query=" + queryString;
	
	callWebService(url, function(response) {
		var results = JSON.parse(response);
		buildResultPanel(results);
	});
}

function buildResultPanel(results) {
	var sectionTitle = document.getElementById("section_title");
	sectionTitle.style.display = "block";

	var innerHTML = "<p><strong>Query string</strong>: " + results.request.query + "</p>";
	innerHTML += "<p><strong>Number of total results</strong>: " + results.hitCount + "</p>";

	var numResultsOfCurrentPage = results.hitCount < results.request.pageSize ? results.hitCount : results.request.pageSize;
	innerHTML += "<p><strong>Number of results on the current page</strong>: " + numResultsOfCurrentPage;
	
	innerHTML += "<ul>";
	var resultList = results.resultList.result;
	for (var i = 0; i < resultList.length; i++) {
		innerHTML += "<li>";
		innerHTML += "<p>Title: <a href='javascript:void(0)' onclick='retrieveDoc(\"" + 
			resultList[i].source + "\", " + resultList[i].id + ")'>" + resultList[i].title + "</a></p>";
		innerHTML += "<p>Authors: " + resultList[i].authorString + "</p>";
		innerHTML += "</li>";
	}
	innerHTML += "</ul>";
	
	document.getElementById("search_result").innerHTML = innerHTML;
}

function buildArticlePanel(results) {
	var sectionTitle = document.getElementById("section_title");
	sectionTitle.style.display = "none";

	var result = results.resultList.result[0];
	var innerHTML = "<h2>" + result.title + "</h2>";
	innerHTML += "<p><strong>Authors</strong>: " + result.authorString + "</p>";
	innerHTML += "<p><strong>Abstract</strong>:</p>";
	innerHTML += "<div>";
	innerHTML += result.abstractText;
	innerHTML += "</div>";
	document.getElementById("search_result").innerHTML = innerHTML;
}

function retrieveDoc(source, id) {
	var url = "https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=src:" + 
		source + "%20and%20ext_id:" + id + "&resulttype=core&format=json";

	callWebService(url, function(response) {
		var results = JSON.parse(response);
		buildArticlePanel(results);
	});
}

document.getElementById("queryString")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        document.getElementById("submitBtn").click();
    }
});

// Default search
document.getElementById("submitBtn").click();
