let container = document.querySelector("#container");
let clearButton = document.querySelector("#clearBoard");

function createGrid(size) {
	for(let i = 0; i < size; i++) {
  	let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size; j++) {
    	let column = document.createElement("div");
      column.classList.add("createdDiv");
      row.appendChild(column);
    }
    container.appendChild(row);
  }
}

function highlight() {
	this.style.backgroundColor = "blue";
}

function resetBoard() {
	let count = 0;
  gridDivs.forEach((div) => {
  	count+= 1;
  })
  console.log(count);
};

function resetBoard() {
	let squares = container.querySelectorAll(".createdDiv");
  squares.forEach((square) => square.style.backgroundColor = "white");
};

let gridDivs = document.querySelectorAll(".createdDiv");
/* gridDivs.addEventListener("click", highlight); */

container.addEventListener("mouseover", function(event) {
  if(event.target.className == "createdDiv") {
  	event.target.style.backgroundColor = "blue";
  }
});

clearButton.addEventListener("click", resetBoard);


createGrid(16);