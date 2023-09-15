function createCloseButton(li) {
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close-btn";
    span.appendChild(txt);
    li.appendChild(span);
}
function addCloseBtnsClickListener(btns) {
    var _loop_1 = function (i) {
        btns[i].addEventListener("click", function () {
            var parentListItem = btns[i].parentElement;
            if (parentListItem) {
                parentListItem.style.display = "none";
            }
        });
    };
    for (var i = 0; i < btns.length; i++) {
        _loop_1(i);
    }
}
// Create a "close" button and append it to each list item
var itemList = document.getElementsByTagName("LI");
for (var i = 0; i < itemList.length; i++) {
    createCloseButton(itemList[i]);
}
// Click on a close button to hide the current list item
var closeButtons = document.getElementsByClassName("close-btn");
addCloseBtnsClickListener(closeButtons);
// Add a "checked" symbol when clicking on a list item
var itemUl = document.querySelector("ul");
if (itemUl) {
    itemUl.addEventListener("click", function (ev) {
        var target = ev.target;
        if (target.tagName === "LI") {
            target.classList.toggle("checked");
        }
    }, false);
}
// Create a new list item when clicking on the "Add" button
function addNewTodo() {
    var li = document.createElement("li");
    var input = (document.getElementById("myInput"));
    var inputValue = input.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === "") {
        alert("You must write something!");
    }
    else {
        document.getElementById("myUL").appendChild(li);
    }
    input.value = "";
    createCloseButton(li);
    addCloseBtnsClickListener(closeButtons);
}
