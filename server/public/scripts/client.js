console.log('this is my javascript file');

$(document).ready(onReady);

function onReady() {
    console.log('in onReady!');
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
        $('#output').append(`
            <li>${item}</li>
        `)
    }
}

//clear display
function clearDisplay() {
    console.log('you clicked on clear display button');
    $('#calc-display').val(' ');
};

