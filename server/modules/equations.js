let equationsListOne = [];
let equationsListTwo = [];
let redoArray = [];

//object that decifers and splits up equation
let equationHandler = {
    
    equationsListOne: equationsListOne,
    equationsListTwo: equationsListTwo,
    redoArray: redoArray,

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
    
    //CALC #2 remove current equation from array
    removeLineItem: function removeLineItem() {
        console.log('removeLineItem request was made');
        equationsListTwo.pop();
        console.log(equationsListTwo);
    },

    //CLEAR ALL HISTORY
    clearHistory: function clearHistory() {
        console.log('in clearHistory function');
        equationsListOne.length = 0;
        equationsListTwo.length = 0;
    },

    //CALC #2 function to recompute equation and push to array (part of stretch goal)
    equationRedo: function equationRedo (equation) {
        console.log(`this is redo equation: ${equation}`);
        let equationString = String(equation);
        let newEquationString = equationString.replaceAll(' ','');
        console.log(`this is new equation string ${newEquationString}`);

        if (newEquationString.includes('+')) {
            let numArray = newEquationString.split('+');
            console.log(numArray);
            redoMath(numArray[0], '+', numArray[1]);
        }
        if (newEquationString.includes('-')) {
            let numArray = newEquationString.split('-');
            redoMath(numArray[0], '-', numArray[1]);
        }
        if (newEquationString.includes('*')) {
            let numArray = newEquationString.split('*');
            redoMath(numArray[0], '*', numArray[1]);
        }
        if (newEquationString.includes('/')) {
            let numArray = newEquationString.split('/');
            redoMath(numArray[0], '/', numArray[1]);
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

                
                
//CALC #2 function to REDO equation and push to array (part of stretch goal)
function redoMath(num1, operator, num2) {
    let number1 = Number(num1);
    let number2 = Number(num2);
    redoArray.length = 0;

    if (operator == '+') {
        redoArray.push(number1 + number2);
    }
    if (operator == '-') {
        redoArray.push(number1 - number2);
    }
    if (operator == '*') {
        redoArray.push(number1 * number2);
    }
    if (operator == '/') {
        redoArray.push(number1 / number2);
    }
    console.log(`this is the answer to your redo equation: ${redoArray}`);
}




module.exports = equationHandler;