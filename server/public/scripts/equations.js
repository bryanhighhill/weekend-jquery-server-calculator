let equationHandler = {
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
    }
}

function mathDoer (num1, operator, num2) {


}


module.exports = equationHandler;