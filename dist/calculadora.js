"use strict";
console.log("hola!");
var allDataNumber = document.getElementsByName('data-number');
var allDataOperation = document.getElementsByName('data-operation');
var clearButton = document.getElementById('data-clear');
var equalsButton = document.getElementById('data-equals');
var result = document.getElementById('result');
var actualOp = '';
var lastOp = '';
var operation;
var finishOperation = false;
allDataNumber.forEach(function (boton) {
    boton.addEventListener('click', function () {
        agregarNumero(boton.innerText);
    });
});
allDataOperation.forEach(function (boton) {
    boton.addEventListener('click', function () {
        selectOperation(boton.innerText);
    });
});
equalsButton === null || equalsButton === void 0 ? void 0 : equalsButton.addEventListener('click', function () {
    calculate();
    updateDisplay();
    finishOperation ? clear() : updateDisplay();
});
clearButton === null || clearButton === void 0 ? void 0 : clearButton.addEventListener('click', function () {
    clear();
    updateDisplay();
});
function updateDisplay() {
    result.value = actualOp;
}
function clear() {
    actualOp = '';
    lastOp = '';
    operation = '';
}
function agregarNumero(num) {
    finishOperation = false;
    actualOp = actualOp.toString() + num.toString();
    updateDisplay();
}
function calculate() {
    var calculo;
    var anterior = parseFloat(lastOp);
    var actual = parseFloat(actualOp);
    if (isNaN(anterior) || isNaN(actual))
        return;
    switch (operation) {
        case '+':
            calculo = anterior + actual;
            break;
        case '-':
            calculo = anterior - actual;
            break;
        case '*':
            calculo = anterior * actual;
            break;
        case '/':
            calculo = anterior / actual;
            break;
        default:
            return;
    }
    actualOp = calculo.toString();
    operation = '';
    lastOp = '';
    finishOperation = true;
}
function selectOperation(op) {
    if (actualOp === '')
        return;
    // if(lastOp !== '')
    // {
    //     calculate();
    // }
    operation = op.toString();
    lastOp = actualOp;
    actualOp = '';
}
