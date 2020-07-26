console.log("hola!");

let allDataNumber = document.getElementsByName('data-number');
let allDataOperation= document.getElementsByName('data-operation');
let clearButton = document.getElementById('data-clear');
let equalsButton = document.getElementById('data-equals');
let result: HTMLInputElement = <HTMLInputElement>document.getElementById('result');


let actualOp: string = '';
let lastOp: string = '';
let operation: any;
let finishOperation: boolean = false;

allDataNumber.forEach(boton =>{
    boton.addEventListener('click', ()=>{
        agregarNumero(boton.innerText);
    });
});

allDataOperation.forEach(boton=>{
    boton.addEventListener('click', ()=>{
        selectOperation(boton.innerText);
    });
});

equalsButton?.addEventListener('click', ()=>{
    calculate();
    updateDisplay();
    finishOperation ? clear() : updateDisplay();    
});

clearButton?.addEventListener('click', ()=>{
    clear();
    updateDisplay(); 
});

function updateDisplay(): void
{
    result.value = actualOp;
}

function clear(): void
{
    actualOp = '';
    lastOp = '';
    operation = '';
}

function agregarNumero(num: string): void
{
    finishOperation = false;
    actualOp = actualOp.toString() + num.toString();
    updateDisplay();
}

function calculate(): void
{
    var calculo;
    const anterior = parseFloat(lastOp);
    const actual = parseFloat(actualOp);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operation)
    {
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

function selectOperation(op: string)
{
    if(actualOp === '') return;
    // if(lastOp !== '')
    // {
    //     calculate();
    // }
    operation = op.toString();
    lastOp = actualOp;
    actualOp = '';
}