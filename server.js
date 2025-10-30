//express web server
var express = require('express');
var app = express();

//Routes
app.get('/', (req, res) => {
    res.send('Hello Quadri');
});

app.get('/dashboard', (req, res) => {
    res.send('Welcome to dashboard');
});

//Start server
const port = process.env.port || 3000;
const server = app.listen(port, () => {
    console.log(`Listening on port ${server.address().port}`);
})
