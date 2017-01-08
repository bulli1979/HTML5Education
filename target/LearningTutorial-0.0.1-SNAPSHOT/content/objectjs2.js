"use strict";
function validate() {
	alert("validate script objectjs.js");}
var MYNS = {
	persons :[],
    Person : function(firstName,name){
		this.name = name;
		this.firstName = firstName;
		this.show=function(){
			alert(firstName + " " + name);
		};
		this.validate = function(){
			if(name === "" || firstName === ""){
				return false;
			}
			return true;
		};
		this.toString = function(){
			return firstName + " " + name;
		};
    },
    fillList : function(){
		var size = this.persons.length;
		var html = "<div><strong>" + size+" Personen erstellt.</strong></div>";
		var listContainer = document.getElementById("list");
		listContainer.innerHTML = html;
		this.persons.forEach(function(entry){
			var div = document.createElement("div");
			div.innerHTML=entry.toString();
			listContainer.appendChild(div);
		});
    },
    ajax : function(){
	    var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (xhttp.readyState === 4 && xhttp.status === 200) {
				document.getElementById("list").innerHTML = xhttp.responseText;
			}
		};
		xhttp.open("GET", "simple.txt", true);
		xhttp.send();
    },
    reset : function(){
    	document.getElementById("list").innerHTML="";
    	this.persons = [];
    }
};


document.getElementById('new').addEventListener('click', function() {
    var name = document.getElementById("name").value;
    document.getElementById("name").value = "";
    var firstName = document.getElementById("firstName").value;
    document.getElementById("firstName").value = "";
    var person = new MYNS.Person(firstName,name);
    var val = person.validate();
    person.show();
    if(val){
	  MYNS.persons.push(person);
    }else{
	  alert("Bitte Name und Vorname eingeben!");
    }
});

document.getElementById('fillList').addEventListener('click', function() {
	MYNS.fillList();
});

document.getElementById('reset').addEventListener('click', function() {
	MYNS.reset();
});

document.getElementById('funktionstest').addEventListener('click', function() {
	validate();
});

document.getElementById('ajax').addEventListener('click', function() {
	MYNS.ajax();
});



