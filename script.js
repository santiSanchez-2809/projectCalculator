function add(a, b){

    return +a + +b;
}

function substract(a, b){
    return +a - +b;
}

function multiply(a, b){
    return +a * +b; 
}

function divide(a, b){
    return +b === 0? "ERROR: Division by zero": +a / +b; 
}

let number1, number2, operator;

function operate(num1, num2, op){ 
    let result;

    switch (op) {
        case "+":
            result = add(num1, num2); 
            break;
        case "-": 
            result = substract(num1, num2);
            break;  
        case "*": 
            result = multiply(num1, num2);
            break; 
        case "/": 
            result = divide(num1, num2);
            break;  
        default:
            break;
    }

    number1 = undefined;
    number2 = undefined; 
    operator = undefined;

    let display = document.querySelector(".display");
    display.textContent = Number.isFinite(result)? Number(result.toFixed(10)): result;

    return result; 
}

function updateVariable(num){
    let display = document.querySelector(".display");

    if(operator){
        number2 = number2? number2 + num: num;
        display.textContent += num;
    }else{
        number1 = number1? number1 + num: num;
        display.textContent = number1;
    }
}

function updateOperator(op){
    let display = document.querySelector(".display");
    
    if(number2){
        number1 = operate(number1, number2, operator); 
        number2 = undefined; 
        operator = op; 

        display.textContent += operator;
    }else if(number1){
        operator = op;
        
        display.textContent = `${number1}${operator}`;
    }else{
        return;
    }
}

function clearOperation(){
    number1 = undefined;
    number2 = undefined; 
    operator = undefined;

    let display = document.querySelector(".display"); 
    display.textContent = "0";
}

let numberButtons = document.querySelectorAll(".numbers > *");
numberButtons.forEach((button => button.addEventListener("click", (e) => { 
    updateVariable(e.target.textContent); 
})))

let opButtons = document.querySelectorAll(".operators > *");
opButtons.forEach(button => button.addEventListener("click", (e) => {
    switch (e.target.textContent) {
        case "+":
        case "-":
        case "*": 
        case "/":
            updateOperator(e.target.textContent); 
            break;
        case "=": 
            if(number2)
                operate(number1, number2, operator);  
            break;
        case "clear": 
            clearOperation();
        default:
            break;
    }
}))