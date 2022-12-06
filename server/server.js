const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded());

const equationHandler = require('./modules/equations');

app.listen(port, () => {
    console.log('listening on port, ', port);
});


//CALC #1 POST
app.post('/equationOne', function(req, res) {
    console.log('POST request was made', req.body.equation);
    if (req.body.equation != undefined) {
        equationHandler.processAndSaveOne(req.body.equation);
        res.sendStatus(201); //created request
    } else {
        res.sendStatus(400); //bad request
    }
});


//CALC #2 POST
app.post('/equationTwo', function(req, res) {
    console.log('POST request was made', req.body.equation);
    if (req.body.equation != undefined) {
        equationHandler.processAndSaveTwo(req.body.equation);
        res.sendStatus(201); 
    } else {
        res.sendStatus(400); //bad request
    }
});


//CALC #2 POST - redo Equation (part of stretch goal)
app.post('/equationRedo', function(req,res) {
    console.log('POST request was made to redo this equation: ', req.body.equation);
    equationHandler.equationRedo(req.body.equation);
    res.sendStatus(201);
})


//CALC #1 GET send
app.get('/equationOne', function(req, res) {
    console.log('GET request was made');
    res.send(equationHandler.equationsListOne);
});


//CALC #2 GET send
app.get('/equationTwo', function(req, res) {
    console.log('GET request was made');
    res.send(equationHandler.equationsListTwo);
});

//CALC #2 GET send redoAnswer (part of STRETCH)
app.get('/equationRedo', function(req, res) {
    console.log('GET request for redo Answer was made');
    res.send(equationHandler.redoArray);
})


//DELETE method to remove last item on calc two equations array or empty all equation history
app.delete('/equationTwo', function(req, res) {
    console.log('delete line item request was made');
    if (req.body.action === 'delete item') {
        equationHandler.removeLineItem();
        res.sendStatus(200);
    } 
    if (req.body.action === 'delete all') {
        equationHandler.clearHistory();
        res.sendStatus(200);
    }
});