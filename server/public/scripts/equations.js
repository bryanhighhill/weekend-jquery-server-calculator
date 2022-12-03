let equationsList = [];

let equationHandler = {
    equationsList: equationsList,
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
    }
    console.log(equationsList);
}


module.exports = equationHandler;