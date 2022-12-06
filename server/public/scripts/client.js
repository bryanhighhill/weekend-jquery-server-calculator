console.log('this is my javascript file');

$(document).ready(onReady);

let operatorArray = [];

function onReady() {
    console.log('in onReady!');
    getEquationsListOne();
    getEquationsListTwo();
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
    $('#clear-display-button').on('click', clearDisplayTwo);
    $('#clear-history-button').on('click', clearHistory);
    $('#output').on('click', '.equation-button', bringBackAnswer);
}


//CALC #1: function to capture which OPERATOR is clicked on and push to array
function operatorFunction() {
    console.log('you clicked an operator');
    operatorArray.length = 0;
    let operator = $(this).data('operator');
    console.log(operator);
    operatorArray.push(operator);
    console.log(operatorArray);
}


//CALC #2: add NUMBER to display
function addNumber() {
    console.log('you clicked a number');
    let number = $(this).data('number');
    console.log(number);
    $('#calc-display').val($('#calc-display').val() + number);
};

//CALC #2: add OPERATOR to display
function addOperator() {
    console.log('you clicked an operator');
    let operator = $(this).data('operator');
    $('#calc-display').val($('#calc-display').val() + operator);
};


//CALC #1: create object from equation and make POST request
function equalFunction() {
    $.ajax({
        method: 'POST',
        url: '/equationOne',
        data: { 
            equation: $('#calc-display-num1').val() + operatorArray[0] + $('#calc-display-num2').val(),
        },
    }).then(function(response){
        console.log('this is the POST response from the server', response);
        
        //call function to get the updated equations array and append to DOM
        getEquationsListOne();

    }).catch(function(error){
        alert(error.responseText);
        console.log(error);
    });

    //could call function here to clear input values for ease of usability
    // clearInputValues();
}


//CALC #2: create object from equation and make POST request
function equalObject() {
    console.log('you clicked on the equals');
    //check validity of input values
    if (isInvalid()) {
        return;
    }

    // make AJAX POST method here
    $.ajax({
        method: 'POST',
        url: '/equationTwo',
        data: { 
            equation: $('#calc-display').val(),
        },
    }).then(function(response){
        console.log('this is the calc 2 POST response from the server', response);

        //call function to get the updated array and append to DOM
        getEquationsListTwo();

    }).catch(function(error){
        alert(error.responseText);
        console.log(error);
    });
};


//CALC #1 function to GET equations list array
function getEquationsListOne() {
    console.log('GET function for equations list was called');
    $.ajax({
        method: 'GET',
        url: '/equationOne',
    }).then(function(response){
        console.log(`this is your get response for calc 1: ${response}`);
    //call function to append to DOM
        appendToDomOne(response);
        console.log(response);
    })
}


//CALC #2 function to GET equations list array
function getEquationsListTwo() {
    console.log('GET function for equations list was called');
    $.ajax({
        method: 'GET',
        url: '/equationTwo',
    }).then(function(response){
        console.log(`this is your get response for calc 2: ${response}`);
    //call function to append to DOM
        appendToDomTwo(response);
        console.log(response);
    })
}


//CALC #1 function to append to DOM
function appendToDomOne(array) {
    console.log('this is my list of CALC ONE equations', array);
    $('#calc-one-output').empty();
    for (let item of array) {
        $('#calc-one-output').append(`
            <li>
                ${item}
            </li>
        `)
    }
}


//CALC #2 function to split equations so that it doesn't append the answer to DOM (part of stretch goal)
function appendToDomTwo(array) {
    console.log('this is my list of equations', array);
    $('#output').empty();
    if (array.length === 0) {
        $('#answer').empty();
    };
    for (let item of array) {
        let answerArray = item.split('=');
        $('#answer').empty();

        //make button from equation so that a click event can be created (part of stretch goal)
        $('#output').append(`
            <li>
                <button class="equation-button" data-equation="${answerArray[0]}">${answerArray[0]}</button>
            </li>
        `);
        $('#answer').append(`
        <h1>
            ${answerArray[1]}
        </h1>`)
    }
}


//CALC #1: function to clear both input values
function clearInputValues() {
    $('#calc-display-num1').val('');
    $('#calc-display-num2').val('');
}

//CALC 2: function to only clear the display, not remove line item
function clearDisplayTwo() {
    $('#calc-display').val('');
}

//CALC 2: clear input display function
function clearDisplay() {
    console.log('you clicked on clear display button');
    $('#calc-display').val('');
    //call function to remove last item from array list
    clearLineItem();
};


//CALC 2: remove current equation from equation array
function clearLineItem() {
    console.log('in clearLineItem');
    $.ajax({
        method: 'DELETE',
        url: '/equationTwo',
        data: {
            action: 'delete item',
        },
    }).then(function(response) {
        //call function to get the updated array and append to DOM
        getEquationsListTwo();
    });
}


//clear equation history for both calcs
function clearHistory() {
    console.log('you\'ve clicked clear history');
    $.ajax({
        method: 'DELETE',
        url: '/equationTwo',
        data: {
            action: 'delete all',
        }
    }).then(function(response){
        getEquationsListOne();
        getEquationsListTwo();
        clearCurrentAnswer();
        clearDisplay();
        clearInputValues();
    })
}



//CALC 2: check validity function (add some examples of validity checks)
function isInvalid(){
    let input = $('#calc-display').val();

    if (input == ''){
        alert('input cannot be blank');
        return true;
    }
    if (/[a-zA-Z]/.test(input)) {
        alert('no letters allowed');
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




//function to clear the current answer
function clearCurrentAnswer(){
    $('#answer').empty();
}


//function to re-compute an equation from the equation list that was clicked on (part of stretch goal)
function bringBackAnswer() {
    console.log('you want to recompute this equation');
    let equation = $(this).data('equation');
    console.log(`this is your equation: ${equation}`);
    $.ajax({
        method: 'POST',
        url: '/equation',
        data: { 
            display: equation,
        },
    }).then(function(response){
        console.log('this is the POST response from the server', response);
        //call function to get the updated array and append to DOM
        getAnswer();
    })
}

//GET method to retrieve answer from server (part of stretch goal)
function getAnswer() {
    $.ajax({
        method: 'GET',
        url: '/equation',
        data: {
            display: 0,
        },    
    }).then(function(response){
        console.log(`this is get answer response: ${response}`);
        displayAnswer(response);
    })
}

//function to display answer on calculator display (part of stretch goal)
function displayAnswer(array) {
    $('#calc-display').val('');
    for (let item of array) {
        let answerArray = item.split('=');
        $('#calc-display').val(answerArray[1]);
        array.length = 0;
    }
}
