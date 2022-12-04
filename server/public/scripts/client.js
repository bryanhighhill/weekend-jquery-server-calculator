console.log('this is my javascript file');

$(document).ready(onReady);

let operatorArray = [];

function onReady() {
    console.log('in onReady!');
    getEquationsList();
    clearInputValues();
    //CALC #1
    $('.calc-one-button[data-operator]').on('click', operatorFunction);
    $('.calc-one-button[data-complete]').on('click', equalFunction);
    $('#clear-one-button').on('click', clearInputValues);
    //CALC #2
    $('.calc-two-num-button[data-number]').on('click', addNumber);
    $('.calc-two-button[data-operator]').on('click', addOperator);
    $('.calc-two-equal-button[data-complete]').on('click', equalObject);
    $('#clear-two-button').on('click', clearDisplay);
    // $('#clear-two-button').on('click', clearLineItem);
    $('#clear-history-button').on('click', clearHistory);
    //$('#output').on('click', 'future button id', 'function to run');
}

//CALC 1: function to capture which operator is clicked on
function operatorFunction() {
    console.log('you clicked an operator');
    operatorArray.length = 0;
    let operator = $(this).data('operator');
    console.log(operator);
    operatorArray.push(operator);
    console.log(operatorArray);
}

//CALC 1: create object from equation and make POST request
function equalFunction() {
    $.ajax({
        method: 'POST',
        url: '/equation',
        data: { 
            equation: $('#calc-display-num1').val() + operatorArray[0] + $('#calc-display-num2').val(),
        },
    }).then(function(response){
        console.log('this is the POST response from the server', response);
        //call function to get the updated array and append to DOM
        getEquationsList();

    }).catch(function(error){ //add error catch to anywhere you have a .then
        alert(error.responseText);
        console.log(error);
    });
    clearInputValues();
}

//CALC 1: function to clear both input values
function clearInputValues() {
    $('#calc-display-num1').val('');
    $('#calc-display-num2').val('');
}

//CALC 2: add number to display
function addNumber() {
    console.log('you clicked a number');
    let number = $(this).data('number');
    console.log(number);
    $('#calc-display').val($('#calc-display').val() + number);
};

//CALC 2: add operator to display
function addOperator() {
    console.log('you clicked an operator');
    let operator = $(this).data('operator');
    $('#calc-display').val($('#calc-display').val() + operator);
};

//CALC 2: create object from equation answer
function equalObject() {
    console.log('you clicked on the equals');
    //check validity of input values
    if (isInvalid()) {
        return;
    }
    // make AJAX POST method here
    $.ajax({
        method: 'POST',
        url: '/equation',
        data: { 
            equation: $('#calc-display').val(),
        },
    }).then(function(response){
        console.log('this is the POST response from the server', response);
        //call function to get the updated array and append to DOM
        getEquationsList();

    }).catch(function(error){ //add error catch to anywhere you have a .then
        alert(error.responseText);
        console.log(error);
    });
};

function getEquationsList() {
    console.log('GET function for equations list was called');
    $.ajax({
        method: 'GET',
        url: '/equation',
    }).then(function(response){
        appendToDom(response);
    })
}

function appendToDom(array) {
    console.log('this is my list of equations', array);
    $('#output').empty();
    for (let item of array) {
        let answerArray = item.split('=');
        $('#output').append(`
            <li>${answerArray[0]}</li>
        `)
        $('#answer').empty();
        $('#answer').append(`
            <h1 id="final-answer">${answerArray[1]}</h1>
        `)
    }
}

//CALC 2: check validity function
function isInvalid(){
    let input = $('#calc-display').val();
    if (input == ''){
        alert('input cannot be blank');
        return true;
    }
    if (input == '+' || input == '-' || input == '/' || input == '*') {
        alert('where are your numbers?');
        return true;
    }
    if (input.length < 3){
        alert('you are missing something here!');
        return true;
    }
    if (input.split('+').length > 2) {
        alert('too many operators');
        return true;
    }
    if (input.split('-').length > 2) {
        alert('too many operators');
        return true;
    }
    if (input.split('*').length > 2) {
        alert('too many operators');
        return true;
    }
    if (input.split('/').length > 2) {
        alert('too many operators');
        return true;
    }
    return false;
}

//CALC 2: clear display
function clearDisplay() {
    console.log('you clicked on clear display button');
    $('#calc-display').val('');

    clearLineItem();
};

//CALC 2: remove last line item from list
function clearLineItem() {
    console.log('in clearLineItem');
    $.ajax({
        method: 'DELETE',
        url: '/equation',
        data: {
            what: 'delete',
        },
    }).then(function(response) {
        //call function to get the updated array and append to DOM
        getEquationsList();
        // clearCurrentAnswer();
    });
}

function clearHistory() {
    console.log('you\'ve clicked clear history');
    $.ajax({
        method: 'DELETE',
        url: '/equation',
    }).then(function(response){
        getEquationsList();
        clearCurrentAnswer();
    })
}

function clearCurrentAnswer(){
    $('#answer').empty();
}

