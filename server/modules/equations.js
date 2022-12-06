let equationsListOne = [];
let equationsListTwo = [];
let displayEquation = [];

//object that decifers and splits up equation
let equationHandler = {
    
    equationsListOne: equationsListOne,
    equationsListTwo: equationsListTwo,
    displayEquation: displayEquation,

    //CALC #1 processAndSave
    processAndSaveOne: function processAndSaveOne (equation) {
        if (equation.includes ('+')) {
            let numArray = equation.split('+');
            mathDoerOne(numArray[0], '+', numArray[1]);
        }
        if (equation.includes ('-')) {
            let numArray = equation.split('-');
            mathDoerOne(numArray[0], '-', numArray[1]);
        }
        if (equation.includes ('/')) {
            let numArray = equation.split('/');
            mathDoerOne(numArray[0], '/', numArray[1]);
        }
        if (equation.includes ('*')) {
            let numArray = equation.split('*');
            mathDoerOne(numArray[0], '*', numArray[1]);
        }
    },


    //CALC #2 processAndSave
    processAndSaveTwo: function processAndSaveTwo (equation) {
        if (equation.includes ('+')) {
            let numArray = equation.split('+');
            mathDoerTwo(numArray[0], '+', numArray[1]);
        }
        if (equation.includes ('-')) {
            let numArray = equation.split('-');
            mathDoerTwo(numArray[0], '-', numArray[1]);
        }
        if (equation.includes ('/')) {
            let numArray = equation.split('/');
            mathDoerTwo(numArray[0], '/', numArray[1]);
        }
        if (equation.includes ('*')) {
            let numArray = equation.split('*');
            mathDoerTwo(numArray[0], '*', numArray[1]);
        }
    },
    
    removeLineItem: function removeLineItem() {
        console.log('removeLineItem request was made');
        equationsListTwo.pop();
        console.log(equationsListTwo);
    },

    clearHistory: function clearHistory() {
        console.log('in clearHistory function');
        equationsListOne.length = 0;
        equationsListTwo.length = 0;
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


//CALC #1 mathDoer
function mathDoerOne (num1, operator, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    console.log(number1);
    console.log(number2);

    if (operator == '+') {
        equationsListOne.push(`${number1} + ${number2} = ${number1 + number2}`);
    }
    if (operator == '-') {
        equationsListOne.push(`${number1} - ${number2} = ${number1 - number2}`);
    }
    if (operator == '/') {
        equationsListOne.push(`${number1} / ${number2} = ${number1 / number2}`);
    }
    if (operator == '*') {
        equationsListOne.push(`${number1} * ${number2} = ${number1 * number2}`);
    console.log(`this is your calc 1 equationsList array: ${equationsListOne}`);
    }
}


//CALC #2 mathDoer
function mathDoerTwo (num1, operator, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    console.log(number1);
    console.log(number2);

    if (operator == '+') {
        equationsListTwo.push(`${number1} + ${number2} = ${number1 + number2}`);
    }
    if (operator == '-') {
        equationsListTwo.push(`${number1} - ${number2} = ${number1 - number2}`);
    }
    if (operator == '/') {
        equationsListTwo.push(`${number1} / ${number2} = ${number1 / number2}`);
    }
    if (operator == '*') {
        equationsListTwo.push(`${number1} * ${number2} = ${number1 * number2}`);
    console.log(`this is your calc 2 equationsList array: ${equationsListTwo}`);
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