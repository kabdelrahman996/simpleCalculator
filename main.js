const output = document.querySelector(".output");
const clearBtn = document.getElementById('clearButton');
const equalsBtn = document.getElementById('equals');
const buttons = document.querySelectorAll("button");

const outputs = [];



buttons.forEach(btn => {
    btn.addEventListener("click", () => addNewelement(btn.value));
});


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
    if (checkInput(ele))
        return;
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

// function to check if = or clear
function checkInput(input) {
    if (input === "=") {
        evaluateExpression();
        return true;
    } else if (input === "clear") {
        clearAll();
        return true;
    }
}
