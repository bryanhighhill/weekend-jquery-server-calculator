console.log('this is my javascript file');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady!');
    $('.calc-button[data-number]').on('click', addNumber);
    $('.calc-button[data-operator]').on('click', addOperator);
    $('.calc-button[data-complete').on('click', equalObject);
    $('#clear-button').on('click', clearDisplay);
}

//add number to display
function addNumber() {
    console.log('you clicked a number');
    let number = $(this).data('number');
    console.log(number);
    $('#calc-display').val($('#calc-display').val() + number);
};

//add operator to display
function addOperator() {
    console.log('you clicked an operator');
    let operator = $(this).data('operator');
    $('#calc-display').val($('#calc-display').val() + operator);
};

//create object from equation answer
function equalObject() {
    console.log('you clicked on the equals');
    
};

//clear display
function clearDisplay() {
    console.log('you clicked on clear display button');
};

