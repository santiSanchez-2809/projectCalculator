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
    return +a / +b;
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

function updateVariable(num){
    let display = document.querySelector(".display");

    if(operator){
        number2 = number2? number2 + num: num;
        display.textContent = number2;
    }else{
        number1 = number1? number1 + num: num;
        display.textContent = number1;
    }
     
    
}


let numberButtons = document.querySelectorAll(".numbers > *");
numberButtons.forEach((button => button.addEventListener("click", (e) => { 
    updateVariable(e.target.textContent); 
})))