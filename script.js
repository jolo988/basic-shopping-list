var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

// SELECT ELEMENTS WE NEED, cache queries. 
// Quicker to get element by ID vs class
// reference to button "enter"
// user input of what's typed into placeholder
// assign query select ul to function


function inputLength() {
	return input.value.length;
}


function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// function -> whenever user clicks, run the function below:
// (listen to the click event -> and perform action/function)
// Adding elements to the bottom of the list:
// Assign li = Create element
// append input.value (whatever is typed) as list -> by creating a new NODE
// append list to UL parent 


function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}
// wrap in if statement - if nothing is typed -> won't run funct
// input value will be empty after each value enter

function addListAfterEnter(event) {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
	};
}

// event parameter needs to be received to pull information
// can use event.which === 13
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
// if input AND there's keyboard enter -> run function 


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);





