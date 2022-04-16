var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}
// üstünü çizme kısmı

var item = document.getElementsByClassName("fin");
for(var i=0; i< item.length;i++){
	item[i].addEventListener("click",toggle);
}

function toggle(){
	this.classList.toggle("done");
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


