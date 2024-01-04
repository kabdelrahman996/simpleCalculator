const output = document.querySelector(".output");
const clearBtn = document.getElementById('clearButton');
const openBracketBtn = document.getElementById('openBracketButton');
const closeBracketBtn = document.getElementById('closeBracketButton');
const percentageBtn = document.getElementById('percentageButton');
const divisionBtn = document.getElementById('divisionButton');
const sevenBtn = document.getElementById('sevenButton');
const eightBtn = document.getElementById('eightButton');
const nineBtn = document.getElementById('nineButton');
const multiplicationBtn = document.getElementById('multiplicationButton');
const fourBtn = document.getElementById('fourButton');
const fiveBtn = document.getElementById('fiveButton');
const sixBtn = document.getElementById('sixButton');
const subtractionBtn = document.getElementById('subtractionButton');
const oneBtn = document.getElementById('oneButton');
const twoBtn = document.getElementById('twoButton');
const threeBtn = document.getElementById('threeButton');
const additionBtn = document.getElementById('additionButton');
const zeroBtn = document.getElementById('zeroButton');
const decimalBtn = document.getElementById('decimalButton');
const equalsBtn = document.getElementById('equals');


const outputs = [];



/// Add event listeners for each button
clearBtn.addEventListener("click", clearAll);
openBracketBtn.addEventListener("click", () => addNewelement("("));
closeBracketBtn.addEventListener("click", () => addNewelement(")"));
percentageBtn.addEventListener("click", () => addNewelement("%"));
divisionBtn.addEventListener("click", () => addNewelement("/"));
multiplicationBtn.addEventListener("click", () => addNewelement("*"));
subtractionBtn.addEventListener("click", () => addNewelement("-"));
additionBtn.addEventListener("click", () => addNewelement("+"));
decimalBtn.addEventListener("click", () => addNewelement("."));
zeroBtn.addEventListener("click", () => addNewelement("0"));
oneBtn.addEventListener("click", () => addNewelement("1"));
twoBtn.addEventListener("click", () => addNewelement("2"));
threeBtn.addEventListener("click", () => addNewelement("3"));
fourBtn.addEventListener("click", () => addNewelement("4"));
fiveBtn.addEventListener("click", () => addNewelement("5"));
sixBtn.addEventListener("click", () => addNewelement("6"));
sevenBtn.addEventListener("click", () => addNewelement("7"));
eightBtn.addEventListener("click", () => addNewelement("8"));
nineBtn.addEventListener("click", () => addNewelement("9"));
equalsBtn.addEventListener("click", () => evaluateExpression());




// functions 

// function to clear all outputs
function clearAll() {
    outputs.length = 0;
    updateUi();
}

// function updateUi to display the output
function updateUi() {
    output.textContent = outputs.join("");
}



// function to add elements
function addNewelement(ele) {
    outputs.push(`${ele}`);
    updateUi();
}

// Function to evaluate the result
function evaluateExpression() {
    const expression = outputs.join("");
    const result = eval(expression);

    clearAll();
    outputs.push(result.toString());
    updateUi();
}
