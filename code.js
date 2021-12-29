let root = document.querySelector(".root");
let currentSize = 16,
    currentColor = "#323875",
    opacityValues = [],
    currentMode = "color";

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
function clearGrid(){
    let currentGrid = document.querySelector(".grid");
    currentGrid.remove()
}

function generateGrid(size){
    let grid = document.createElement("div");
        grid.classList.add("grid");

    // generate pixel containers - 'rows'
    for(let rowNum = 1; rowNum <= size; rowNum++){
        let row = document.createElement("div");
            row.classList.add(`row-${rowNum}`)

        // generate pixels
        for( let columnPos = 1; columnPos <= size; columnPos++){
            let item = document.createElement("div");
                item.style.width = `calc(60vh /${size})`;
                item.style.height = `calc(60vh /${size})`;
            let indexNum = (((rowNum - 1) * size) + columnPos);
                item.classList.add(`item-${indexNum}`);
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
                row.appendChild(item);
        }
            grid.appendChild(row);
    }
    root.appendChild(grid)
}

// User Inputs

// User can see changes but they don't happen until commitment of the value
let slider = document.querySelector('.range-slider'),
    sliderValueOutput = document.querySelector('.range-slider-value');
    slider.oninput = function () {sliderValueOutput.textContent = this.value;};
    slider.addEventListener('change', (event) => {
        clearGrid();
        generateGrid(parseInt(slider.value));
        console.log(parseInt(slider.value))
    });



let resetButton = document.querySelector("#generate-grid");
    resetButton.addEventListener("click", () =>{
        clearGrid();
        generateGrid(parseInt(slider.value));
    });

let colorButton = document.querySelector("#color-mode");
    colorButton.addEventListener("click", () =>{
        if(currentMode != "color"){
            clearGrid();
            currentMode = "color";
            generateGrid(parseInt(slider.value));
        }
    });

let partyButton = document.querySelector("#party-mode");
    partyButton.addEventListener("click", () =>{
        if(currentMode != "party"){
            clearGrid();
            currentMode = "party";
            generateGrid(parseInt(slider.value));
        }
    });

let opacityButton = document.querySelector("#opacity-mode");
    opacityButton.addEventListener("click", () =>{
        if(currentMode != "opacity"){
            clearGrid();
            currentMode = "opacity";
            generateGrid(parseInt(slider.value));
        }
    });


// Initialize
generateGrid(21)