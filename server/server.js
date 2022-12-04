const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));
app.use(express.urlencoded());

const equationHandler = require('./public/scripts/equations');
const equationDecipher = require('./public/scripts/equations');

app.listen(port, () => {
    console.log('listening on port, ', port);
});

app.get('/equation', function(req, res) {
    console.log("GET request was made");
    res.send(equationHandler.equationsList);
});

app.post('/equation', function(req, res) {
    console.log('POST request was made', req.body.equation); //access data being sent in POST request using req.body
    if (req.body.equation != undefined) {
        equationHandler.processAndSave(req.body.equation);
        res.sendStatus(201); //created request
    } else {
        res.sendStatus(400); //bad request
    }
});

app.delete('/equation', function(req, res) {
    console.log('DELETE request was made');
    equationHandler.clearHistory();
    res.sendStatus(200);
})