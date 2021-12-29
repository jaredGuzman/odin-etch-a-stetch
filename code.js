let defaultSize = 16,
    currentSize = 16;
let currentHoverColor = "#323875";
let slider = document.querySelector('.range-slider'),
    sliderValue = document.querySelector('.range-slider-value').value,
    sliderValueOutput = document.querySelector('.range-slider-value');



    //
    //  ONCE THIS IS DONE, REGENERATE GRID USING NEW VALUE
    //      -- update currentsize, add event listener to input on 'mouseup' maybe?
    //
    slider.oninput = function () {sliderValueOutput.textContent = this.value;};
    
    



//
//      NEED TO CHANGE TO UPDATE USING USER INPUT
//
function hoverColor(item, color){
    item.addEventListener("mouseenter", () => {
        // highlight the mouseenter target
        item.style.background = color;
      }, false);
}

// CAN MAYBE BE REFACTORED TO BE SIMPLER - this plus generaterow both inside the generate grid function maybe?
function generateDiv() {
    let item = document.createElement("div");
        hoverColor(item, currentHoverColor);
    return item
}

function generateRow(size){
    let row = document.createElement("div");
        for( let columnPos = 1; columnPos <= size; columnPos++){
            let generatedDiv = generateDiv(columnPos);
                row.appendChild(generatedDiv);
        }
    return row
}

function deleteGrid(currentGrid){
    // 
    //      DELETE ALL ELEMENT IN GRID AND GRID ELEMENT TOO
    //
    //
    //
    currentGrid.forE
}

function generateGrid(size){
    let currentGrid = document.querySelector(".grid");
    console.log(!!currentGrid);
    if(!!currentGrid){
        deleteGrid(currentGrid);
    }
        let grid = document.createElement("div");
        grid.classList.add(`grid`);
    for(let rowNum = 1; rowNum <= size; rowNum++){
        let generatedRow = generateRow(size);
            grid.appendChild(generatedRow);
    }
    return grid
}


//
//  ADD THIS FUNCTION TO ANY TIME THE USER FINISHES INPUTTING SOMETHING
//
function clearGrid() {
    generateGrid(currentSize);
}


let button = document.querySelector("#generate-grid");
    button.addEventListener("click", () =>{
        clearGrid();
    });
let root = document.querySelector(".root");
    root.appendChild(generateGrid(16, 16));