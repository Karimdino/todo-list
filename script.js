const SaveToDo = JSON.parse(localStorage.getItem('input'));
SaveToDo.forEach(newElement);

function closeElement(event) {
	const div = event.target.parentElement;
	div.style.display = 'none';
}
function checked(ev) {
	if (ev.target.tagName === 'LI') {
		ev.target.classList.toggle('checked');
	}
}

// Create a "close" button and append it to each list item
const myNodelist = document.getElementsByTagName('LI');

for (let i = 0; i < myNodelist.length; i++) {
	const span = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
const close = document.getElementsByClassName('close');

for (let i = 0; i < close.length; i++) {
	close[i].onclick = closeElement;
}

// Add a "checked" symbol when clicking on a list item
const list = document.querySelector('ul');
list.addEventListener('click', checked);

// Create a new list item when clicking on the "Add" button
function newElement(inputValue) {
	const li = document.createElement('li');

	const textInTheInput = document.createElement('span');
	textInTheInput.innerText = inputValue;
	textInTheInput.className = 'todoItem';
	li.appendChild(textInTheInput);
	if (inputValue === '') {
		alert('You must write something!');
	} else {
		document.getElementById('myUL').appendChild(li);
		const input = Array.from(
			document.querySelector('ul').querySelectorAll('.todoItem')
		).map((element) => element.innerText);
		const list1 = JSON.stringify(input);

		localStorage.setItem('input', list1);
	}
	document.getElementById('myInput').value = '';

	const span = document.createElement('SPAN');
	const txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	span.onclick = closeElement;
}
