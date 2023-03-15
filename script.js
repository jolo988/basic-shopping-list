const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listItems = document.querySelectorAll("li")

// create list when entering shopping items
function createListElement() {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	
	// click item to cross and uncross item (DOM .done)
	li.addEventListener("click", () => {
		li.classList.toggle("done")
	});
	
	// add delete button to added input items on shopping list
	// and delete item when clicked
	const deleteButton = document.createElement('BUTTON');
	deleteButton.textContent = "Delete";
	li.appendChild(deleteButton);
	deleteButton.addEventListener("click", () => {
		li.remove()
	});
}

// measures user input length
function inputLength() {
	return input.value.length;
}

// if user inputs more than 0 characters, this will call on the createListElement to add new input item after user "click"
function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

// if user inputs more than 0 characters and presses 'enter' key, this will call on the createListElement to add new input item
function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// Listener to call addListAfterClick and addListAfterKeypress after after user "clicks" button or presses 'enter' key
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

// for current/default list items; this will toggle "done" (cross/uncross item)
listItems.forEach(item => {
	item.addEventListener("click", () => {
		item.classList.toggle("done")
	});
})

// for current/defauly list items; this will add the delete button to each item
// and remove item if "clicked" by user
listItems.forEach(item => {
	deleteButton = document.createElement('BUTTON');
	deleteButton.textContent = "Delete";
	item.appendChild(deleteButton);

	deleteButton.addEventListener("click", () => {
		item.remove()
	});
})



