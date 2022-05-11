var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");



	fetch("light.json")
	.then(response => response.json())
	.then(data => {
		var x = JSON.stringify(data);
		var y = JSON.parse(x);
		var z = data.product;
		console.log(data);
		console.log(x);
		console.log(y);
		console.log(data.product);
		console.log(z);

		
		for(var i=0;i< data.product.length;i++){
			var li = document.createElement("li");
			li.appendChild(document.createTextNode(data.product[i]));
			ul.appendChild(li);
			input.value = "";
		}
	})


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


