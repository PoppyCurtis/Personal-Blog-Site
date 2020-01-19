const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
const port = 3001;

app.use(express.static(__dirname + './public'));


app.use(function (req, res, next) {
    console.log('Time:', Date.now());
    next();
});

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/home', (req, res) => {
    res.json({message: 'Post Created'});
});

app.post('/login' , (req, res) => {
    //Mock user 
    const user = {
        id: 1, 
        username: 'poppy',
        email: 'abc@email.com'
    }
    jwt.sign({user}, 'secret', (err, token) => {
        console.log(res.json({
            token
        }));
    });
});

app.listen(port, () => console.log(`Server listening on port 3001`)); 
