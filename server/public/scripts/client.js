console.log('this is my javascript file');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady!');
    getEquationsList();
    $('.calc-button[data-number]').on('click', addNumber);
    $('.calc-button[data-operator]').on('click', addOperator);
    $('.calc-button[data-complete]').on('click', equalObject);
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
    clearDisplay();
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
        $('#output').append(`
            <li>${item}</li>
        `)
    }
}

//check validity function
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
    if (Number(input) != NaN) {
        alert('please include an operator');
        return true;
    } 
    return false;
}
//clear display
function clearDisplay() {
    console.log('you clicked on clear display button');
    $('#calc-display').val('');
};

