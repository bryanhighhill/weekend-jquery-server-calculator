const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));
// app.use(express.urlencoded());

const equationHandler = require('./scripts/equations');

app.listen(port, () => {
    console.log('listening on port, ', port);
});

app.get('', function(req, res) {
    console.log("request was made");
    res.send('hello there');
});

app.post('/equation', function(req, res) {
    console.log('in the post request!', req.equation); //access data being sent in POST request using req.body
    if (req.equation != undefined) {
        equationHandler.processAndSave(req.equation);
        res.sendStatus(201); //created request
    } else {
        res.sendStatus(400); //bad request
    }
});