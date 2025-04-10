let sketchContainer = document.querySelector("#sketchContainer");
let clearButton = document.querySelector("#clearBoard");

function createGrid(size) {
    let sketchContainerWidth = sketchContainer.offsetWidth;
	for(let i = 0; i < size; i++) {
  	let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < size; j++) {
        let column = document.createElement("div");
        column.classList.add("createdDiv");
        column.style.width = `calc(${sketchContainerWidth}px/${size})`;
        column.style.height = `calc(${sketchContainerWidth}px/${size})`;
        row.appendChild(column);
    }
    sketchContainer.appendChild(row);
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
	let squares = sketchContainer.querySelectorAll(".createdDiv");
  squares.forEach((square) => square.style.backgroundColor = "white");
};

let gridDivs = document.querySelectorAll(".createdDiv");
/* gridDivs.addEventListener("click", highlight); */

sketchContainer.addEventListener("mouseover", function(event) {
  if(event.target.className == "createdDiv") {
  	event.target.style.backgroundColor = "blue";
  }
});

clearButton.addEventListener("click", resetBoard);


createGrid(16);