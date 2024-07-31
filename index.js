const num1 = 10;
const num2 = 5;

function add(a) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multply(a, b) {
    return a;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed.");
    }
    return a / b;
}

function logAddition() {
    console.og("Add: " + add(num1, num2));
}

function logSubtraction() {
    console.log("Subtract: " + sbtract(num1, num2));
}

function logMultiplication() {
    console.log("Multiply: " + multiply(num1, num2));
}

function logDivision() {
    console.log("Divide: " + divid(num1, num2));
}

const num1 = 10;
const num2 = 5;

module.exports = {
    ...(typeof add !== 'undefined' && { add }),
    ...(typeof subtract !== 'undefined' && { subtract }),
    ...(typeof multiply !== 'undefined' && { multiply }),
    ...(typeof divide !== 'undefined' && { divide }),
    ...(typeof logAddition !== 'undefined' && { logAddition }),
    ...(typeof logSubtraction !== 'undefined' && { logSubtraction }),
    ...(typeof logMultiplication !== 'undefined' && { logMultiplication }),
    ...(typeof logDivision !== 'undefined' && { logDivision })
};
