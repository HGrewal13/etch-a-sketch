let sketchContainer = document.querySelector("#sketchContainer");
let clearButton = document.querySelector("#clearBoard");

function createGrid(size) {
    let sketchContainerWidth = sketchContainer.offsetWidth;
    console.log(sketchContainerWidth);
    // Generate grid rows with property display: flex. Necessary to generate column divs in the same row
	for(let i = 0; i < size; i++) {
  	let row = document.createElement("div");
    row.classList.add("row");
    // generate columns associated with each row
    for(let j = 0; j < size; j++) {
        let column = document.createElement("div");
        column.classList.add("createdDiv");
        /* ensure squares are created without leaking out of container */
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
	let squares = sketchContainer.querySelectorAll(".createdDiv");
    squares.forEach((square) => square.style.backgroundColor = "white");
};

// Event delegation
// Target parent element in order to add event listener to target all elements with class = createdDiv
sketchContainer.addEventListener("mouseover", function(event) {
    if(event.target.className == "createdDiv") {
  	    event.target.style.backgroundColor = "blue";
    }
});

clearButton.addEventListener("click", resetBoard);


createGrid(64);