let display = document.getElementById('display');

function clearDisplay() {
    display.value = '';
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    const lastChar = display.value.slice(-1);
    if ('+-*/'.includes(lastChar)) {
        display.value = display.value.slice(0, -1); // Replace last character if it’s an operator
    }
    display.value += operator;
}

function appendDot() {
    const lastSegment = display.value.split(/[\+\-\*\/]/).pop();
    if (!lastSegment.includes('.')) {
        display.value += '.';
    }
}

function calculateResult() {
    try {
        let result = eval(display.value);
        
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Помилка';
        } else {
            display.value = Number.isInteger(result) ? result : result.toFixed(2);
        }
    } catch (e) {
        display.value = 'Помилка';
    }
}
