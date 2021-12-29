let currentSize = 16,
    currentColor = "#323875",
    opacityValues = [],
    currentMode = "color";

let slider = document.querySelector('.range-slider'),
    sliderValue = document.querySelector('.range-slider-value').value,
    sliderValueOutput = document.querySelector('.range-slider-value');
    slider.oninput = function () {sliderValueOutput.textContent = this.value;};

function hoverColor(item, color){
    item.addEventListener("mouseenter", () => {
        item.style.background = color;
      }, false);
}

function hoverParty(item){
    let randomColor = Math.floor(Math.random()*0xFFFFFF<<0).toString(16);
    item.addEventListener("mouseenter", () => {
        item.style.background = `#${randomColor}`;
      }, false);
}

function hoverOpacity(item, indexNum){
    opacityValues.push(0);
    item.classList.add(`item-${indexNum}`);
    item.style.opacity = 0;
    item.addEventListener("mouseenter", () => {
        let thisIndex = parseFloat(item.className.slice(5)) - 1;
        let updatedOpacity = opacityValues[thisIndex] + 1;
        opacityValues[thisIndex] <= 10 
            ? opacityValues[thisIndex] = updatedOpacity 
            : updatedOpacity = 10;
        item.style.background = currentColor;      
        item.style.opacity = updatedOpacity / 10;
      }, false);
}

function generateDiv(columnPos, rowNum, size) {
    let item = document.createElement("div");
    let indexNum = (((rowNum - 1) * size) + columnPos);
    // Cases
    switch(currentMode){
        case 'color':
            hoverColor(item, currentColor);
            break;
        case 'party':
            hoverParty(item);
            break;
        case 'opacity':
            hoverOpacity(item, indexNum);
        default:
            hoverColor(item, currentColor);
    } 
    return item
}

function generateRow(size, rowNum){
    let row = document.createElement("div");
        for( let columnPos = 1; columnPos <= size; columnPos++){
                row.appendChild(generateDiv(columnPos, rowNum, size));
        }
    return row
}

function generateGrid(size){
    let currentGrid = document.querySelector(".grid"),
        grid = document.createElement("div");
        grid.classList.add("grid");

    if(!!currentGrid){
        currentGrid.remove()
    }

    for(let rowNum = 1; rowNum <= size; rowNum++){
            grid.appendChild(generateRow(size, rowNum));
    }
    return grid
}



let button = document.querySelector("#generate-grid");
    button.addEventListener("click", () =>{
        clearGrid();
    });


// Initializing the grid
let root = document.querySelector(".root");
    root.appendChild(generateGrid(16, 16));