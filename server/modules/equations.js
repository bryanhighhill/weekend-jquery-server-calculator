let equationsList = [];
let displayEquation = [];

//object that decifers and splits up equation
let equationHandler = {
    
    equationsList: equationsList,
    displayEquation: displayEquation,

    processAndSave: function processAndSave (equation) {
        if (equation.includes ('+')) {
            let numArray = equation.split('+');
            mathDoer(numArray[0], '+', numArray[1]);
        }
        if (equation.includes ('-')) {
            let numArray = equation.split('-');
            mathDoer(numArray[0], '-', numArray[1]);
        }
        if (equation.includes ('/')) {
            let numArray = equation.split('/');
            mathDoer(numArray[0], '/', numArray[1]);
        }
        if (equation.includes ('*')) {
            let numArray = equation.split('*');
            mathDoer(numArray[0], '*', numArray[1]);
        }
    },

    clearHistory: function clearHistory() {
        console.log('in clearHistory function');
        equationsList.length = 0;
    },
    
    removeLineItem: function removeLineItem() {
        console.log('in removeLineItem');
        equationsList.pop();
        console.log(equationsList);
    },
    
    //function to split an equation from equation list after it's clicked (part of stretch goal)
    process: function process(equation) {
        if (equation.includes ('+')) {
            let numArray = equation.split('+');
            mathAnswer(numArray[0], '+', numArray[1]);
        }
        if (equation.includes ('-')) {
            let numArray = equation.split('-');
            mathAnswer(numArray[0], '-', numArray[1]);
        }
        if (equation.includes ('/')) {
            let numArray = equation.split('/');
            mathAnswer(numArray[0], '/', numArray[1]);
        }
        if (equation.includes ('*')) {
            let numArray = equation.split('*');
            mathAnswer(numArray[0], '*', numArray[1]);
        }

    }
}

function mathDoer (num1, operator, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    console.log(number1);
    console.log(number2);

    if (operator == '+') {
        equationsList.push(`${number1} + ${number2} = ${number1 + number2}`);
    }
    if (operator == '-') {
        equationsList.push(`${number1} - ${number2} = ${number1 - number2}`);
    }
    if (operator == '/') {
        equationsList.push(`${number1} / ${number2} = ${number1 / number2}`);
    }
    if (operator == '*') {
        equationsList.push(`${number1} * ${number2} = ${number1 * number2}`);
    console.log(`this is your equationsList array: ${equationsList}`);
    }
}

//function to recompute equation and push to array (part of stretch goal)
function mathAnswer (num1, operator, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    console.log(`this is number 1: ${number1}`);
    console.log(`this is number 2: ${number2}`);

    if (operator == '+') {
        displayEquation.length = 0;
        displayEquation.push(number1 + number2);
    }
    if (operator == '-') {
        displayEquation.length = 0;
        displayEquation.push(number1 - number2);
    }
    if (operator == '/') {
        displayEquation.length = 0;
        displayEquation.push(number1 / number2);
    }
    if (operator == '*') {
        displayEquation.length = 0;
        displayEquation.push(number1 * number2);
    }
console.log(`this is your display array: ${displayEquation}`);
}



module.exports = equationHandler;