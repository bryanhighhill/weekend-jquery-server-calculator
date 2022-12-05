const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded());

const equationHandler = require('./public/scripts/equations');

app.listen(port, () => {
    console.log('listening on port, ', port);
});

app.get('/equation', function(req, res) {
    console.log("GET request was made");
    // if (req.body.display === 0) {
    //     res.send(equationHandler.displayEquation)
    // } else {
    // res.send(equationHandler.equationsList);
    // }
    res.send(equationHandler.equationsList);
});


app.post('/equation', function(req, res) {
    console.log('POST request was made', req.body.equation);
    if (req.body.equation != undefined) {
        equationHandler.processAndSave(req.body.equation);
        res.sendStatus(201); //created request
    } else if (req.body.display) {
        console.log(`this is the equation to recompute: ${req.body.display}`);
        equationHandler.process(req.body.display);
        res.sendStatus(201);
    } else {
        res.sendStatus(400); //bad request
    }
});


app.delete('/equation', function(req, res) {
    console.log('delete line item request was made');
    if (req.body.what == 'delete') {
        equationHandler.removeLineItem();
        res.sendStatus(200);
    } else {
        equationHandler.clearHistory();
        res.sendStatus(200);
    }
});