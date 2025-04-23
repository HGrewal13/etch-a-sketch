let sketchContainer = document.querySelector("#sketchContainer");
let clearButton = document.querySelector("#clearBoard");
let changeTileCountButton = document.querySelector("#resize");
let blackHighlightButton = document.querySelector("#blackHighlight");
let randomHighLightButton = document.querySelector("#randomHighlight");
let blackHighlightFlag = true;
let randomHighlightFlag = false;

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
        // column.style.height = `calc(${sketchContainerWidth}px/${size})`; 
        column.style.height = `calc(500px/${size})`;
        row.appendChild(column);
    }
    sketchContainer.appendChild(row);
  }
}

function highlight(element) {
	element.style.backgroundColor = "black";
}

function randomHighlight(element) {
    let r = Math.floor(Math.random() * (255 - 0));
    let g = Math.floor(Math.random() * (255 - 0));
    let b = Math.floor(Math.random() * (255 - 0));
    element.style.backgroundColor = `rgb(${r},${g},${b})`;
}

function resetBoard() {
	let squares = sketchContainer.querySelectorAll(".createdDiv");
    squares.forEach((square) => square.style.backgroundColor = "white");
};

function changeTileCount(n) {
    // let rows = document.querySelectorAll(".row");
    sketchContainer.innerHTML = null;
    createGrid(n);
}

// ------------------- EVENT LISTENERS -----------------------


randomHighLightButton.addEventListener("click", () => {
    blackHighlightFlag = false;
    randomHighlightFlag = true;
});

blackHighlightButton.addEventListener("click", () => {
    blackHighlightFlag = true;
    randomHighlightFlag = false;
});

// Event delegation
// Target parent element in order to add event listener to target all elements with class = createdDiv
// Passing in event.target to highlight function works because we're passing in the delegated element as an arguement
sketchContainer.addEventListener("mouseover", function(event) {
    if(event.target.className == "createdDiv") {
        if(blackHighlightFlag == true) {
            highlight(event.target);
        }
        else if(randomHighlightFlag == true) {
            randomHighlight(event.target);
        }
    }
});

changeTileCountButton.addEventListener("click", function(event) {
    let tileCount = parseInt(prompt("Enter in number of tiles"));
    console.log(tileCount);
    while (tileCount <= 0 || tileCount > 100) {
        tileCount = parseInt(prompt("Enter in number of tiles"));
    }
    if (tileCount === null) {
        changeTileCount(16);
    } else {
        changeTileCount(tileCount);
    }
    
});

clearButton.addEventListener("click", resetBoard);


// --------------- RUN ------------------

createGrid(16);