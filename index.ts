function createCloseButton(li: Element) {
	const span: HTMLElement = document.createElement("SPAN");
	const txt: Text = document.createTextNode("\u00D7");
	span.className = "close-btn";
	span.appendChild(txt);
	li.appendChild(span);
}

function addCloseBtnsClickListener(btns: HTMLCollectionOf<Element>) {
	for (let i = 0; i < btns.length; i++) {
		btns[i].addEventListener("click", () => {
			const parentListItem = btns[i].parentElement;
			if (parentListItem) {
				parentListItem.style.display = "none";
			}
		});
	}
}

// Create a "close" button and append it to each list item
const itemList: HTMLCollectionOf<Element> = document.getElementsByTagName("LI");
for (let i = 0; i < itemList.length; i++) {
	createCloseButton(itemList[i]);
}

// Click on a close button to hide the current list item
const closeButtons: HTMLCollectionOf<Element> =
	document.getElementsByClassName("close-btn");
addCloseBtnsClickListener(closeButtons);

// Add a "checked" symbol when clicking on a list item
const itemUl: HTMLUListElement | null = document.querySelector("ul");
if (itemUl) {
	itemUl.addEventListener(
		"click",
		function (ev) {
			const target = <HTMLElement>ev.target;
			if (target.tagName === "LI") {
				target.classList.toggle("checked");
			}
		},
		false
	);
}

// Create a new list item when clicking on the "Add" button
function addNewTodo() {
	const li: HTMLLIElement = document.createElement("li");
	const input: HTMLInputElement = <HTMLInputElement>(
		document.getElementById("myInput")
	);
	const inputValue = input.value;
	const t: Text = document.createTextNode(inputValue);

	li.appendChild(t);

	if (inputValue === "") {
		alert("You must write something!");
	} else {
		(document.getElementById("myUL") as HTMLElement).appendChild(li);
	}

	input.value = "";

	createCloseButton(li);
	addCloseBtnsClickListener(closeButtons);
}
