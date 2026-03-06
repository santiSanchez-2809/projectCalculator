function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b; 
}

function divide(a, b){
    return a / b;
}

let number1, number2, operator;

function operate(num1, num2, op){
    switch (op) {
        case "add":
            return add(num1, num2); 
        case "substract": 
            return substract(num1, num2); 
        case "multiply": 
            return multiply(num1, num2); 
        case "divide": 
            return divide(num1, num2); 
        default:
            break;
    }

    return 0; 
}