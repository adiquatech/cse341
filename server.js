//express web server
var express = require('express');
var app = express();

//Routes
app.use('/', require('./routes'));

//Start server
const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${server.address().port}`);
})
