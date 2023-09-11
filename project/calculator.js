let currentInput = '';
let operatorPressed = false;

function appendToDisplay(value) {
    if (operatorPressed && "+-*/^".includes(value)) {
        // Do not allow consecutive operators
        return;
    }
    
    currentInput += value;
    document.getElementById('result').value = currentInput;
    operatorPressed = "+-*/^".includes(value);
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('result').value = '';
    operatorPressed = false;
}

function calculateResult() {
    try {
        const result = eval(currentInput);
        document.getElementById('result').value = result;
        currentInput = result.toString();
        operatorPressed = false;
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// Rest of the functions for scientific operations (e.g., squareRoot, sine, cosine, logarithm)

// Function to handle the exponentiation (^) button
function exponentiation() {
    try {
        const parts = currentInput.split('^');
        if (parts.length === 2) {
            const base = parseFloat(parts[0]);
            const exponent = parseFloat(parts[1]);
            
            if (!isNaN(base) && !isNaN(exponent)) {
                const result = Math.pow(base, exponent);
                document.getElementById('result').value = result;
                currentInput = result.toString();
                operatorPressed = false;
            } else {
                document.getElementById('result').value = 'Error';
            }
        } else {
            document.getElementById('result').value = 'Error';
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function squareRoot() {
    try {
        const inputValue = parseFloat(currentInput);
        if (!isNaN(inputValue) && inputValue >= 0) {
            const result = Math.sqrt(inputValue);
            document.getElementById('result').value = result;
            currentInput = result.toString();
        } else {
            document.getElementById('result').value = 'Error';
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
function exponentiation() {
    try {
        // Check if there is a base number and an exponent
        if (currentInput.includes('^')) {
            const [base, exponent] = currentInput.split('^').map(parseFloat);

            if (!isNaN(base) && !isNaN(exponent)) {
                const result = Math.pow(base, exponent);
                document.getElementById('result').value = result;
                currentInput = result.toString();
            } else {
                document.getElementById('result').value = 'Error';
            }
        } else {
            document.getElementById('result').value = 'Error';
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}



function sine() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.sin(inputValue * (Math.PI / 180)); // Convert degrees to radians
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function cosine() {
    try {
        const inputValue = parseFloat(currentInput);
        const result = Math.cos(inputValue * (Math.PI / 180)); // Convert degrees to radians
        document.getElementById('result').value = result;
        currentInput = result.toString();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function tangent() {
    try {
        const inputValue = parseFloat(currentInput);
        if (Math.abs(inputValue % 90) === 0) {
            document.getElementById('result').value = 'Error'; // Tan(90n degrees) is undefined
        } else {
            const result = Math.tan(inputValue * (Math.PI / 180)); // Convert degrees to radians
            document.getElementById('result').value = result;
            currentInput = result.toString();
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

function logarithm() {
    try {
        const inputValue = parseFloat(currentInput);
        if (inputValue > 0) {
            const result = Math.log10(inputValue);
            document.getElementById('result').value = result;
            currentInput = result.toString();
        } else {
            document.getElementById('result').value = 'Error';
        }
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}
