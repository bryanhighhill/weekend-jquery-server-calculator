console.log('this is my javascript file');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady!');
    $('.calc-button[data-number]').on('click', addNumber);
    $('.calc-button[data-operator]').on('click', addOperator);
    $('#clear-button').on('click', clearDisplay);
}

//add number to display
function addNumber() {
    console.log('you clicked a number');
};

//add operator to display
function addOperator() {
    console.log('you clicked an operator');
};

//create object from equation answer
function equalObject() {};

//clear display
function clearDisplay() {
    console.log('you clicked on clear display button');
};

