const express = require('express');

const app = express();
const port = 5001;

app.use(express.static('server/public'));
// app.use(express.urlencoded());

// const quoteList = require('./modules/quoteList');

// app.listen(port, () => {
//     console.log('listening on port, ', port);
// });

// app.get('/quotes', function(req, res) {
//     console.log("request for /quotes was made");
//     res.send(quoteList);
// });

// app.post('/quotes', function(req, res) {
//     console.log('in the post request!', req.body); //access data being sent in POST request using req.body
//     if(req.body.text && req.body.author) {
//     quoteList.push(req.body);
//     res.sendStatus(201);
// } else {
//     res.sendStatus(500);
// }
// });
