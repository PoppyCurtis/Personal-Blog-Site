const express = require('express');
const app = express();
const port = 3001;

app.use(express.static(__dirname + './public'));


app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Server listening on port 3001`)); 
