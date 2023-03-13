// Select elements needed to create shopping list, and cache queries. 

var button = document.getElementById('enter');
var input = document.getElementById('userinput');
var ul = document.querySelector("ul");

// measure length of input (input requiring length of > 0, as per if statement below)
function inputLength() {
	return input.value.length;
}

// append input to list (under parent list 'ul')
function createListElement() {
	var li = document.createElement("li"); 
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

// input appends to list only if characters/input > 0
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// input appends to list only if characters/input > 0 AND presses 'enter' on keyboard
// NOTE: can use event.which === 13
// https://www.cambiaresearch.com/articles/15/javascript-char-codes-key-codes
function addListAfterEnter(event) {
	if (inputLength() > 0 && event.code === "Enter") {
		createListElement();
	};
}

// run addListAfterClick function when user clicks button
button.addEventListener("click", addListAfterClick);

// run addListAfterEnter function when user presses 'enter' on keyboard
input.addEventListener("keypress", addListAfterEnter);





