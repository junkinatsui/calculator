let displayValue = '';


function appendToDisplay(value) {
    if ((displayValue === '0' || displayValue === '00') && !isOperator(value) && value !== '.') {
        return;
    }
    if (displayValue === '0' && value === '0') return;

    if (displayValue === '0' && value !== '.') {
        displayValue = '';
    }
    if ((value === '+' || value === '-' || value === '*' || value === '/') &&
        (isOperator(displayValue.charAt(displayValue.length - 1)))) {
        return;
    }
    if (value === '.' && displayValue.endsWith('.')) return;

    displayValue += value;
    updateDisplay();
}

function clearDisplay() {
    displayValue = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = displayValue;
}

function calculate() {
    try {
        const result = eval(displayValue);
        if (result !== undefined) {
            displayValue = result.toString();
            updateDisplay();
        }
    } catch (error) {
        displayValue = 'Error';
        updateDisplay();
    }
}

function isOperator(char) {
    return char === '+' || char === '-' || char === '*' || char === '/';
}
