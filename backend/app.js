const express = require('express');
var cors = require('cors')
const fs = require('fs');
const path = require('path');
const app = express();


const session = require('express-session')

app.use(cors());


app.use(
    session({
        secret: 'your-secret-key123',
        resave: false,
        saveUninitialized: true,
    })
);


app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, "data", '/login.html'));
});

app.use(require('body-parser').urlencoded({ extended: false }));

app.post('/loginData', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body;
    
    if (username === "Test" && password === "Test") {
        req.session.user = username;
        res.redirect('/main');
    }
});

app.all('*', (req, res, next) => {
    console.log(req.session.user);
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
})

app.use(express.static(path.join(__dirname, "..", 'build')));

app.get('/main', function (req, res) {
    res.sendFile(path.join(__dirname, "..", 'build', 'index.html'));
});

app.use(express.json());

app.post('/json', (req, res) => {
    fs.writeFile("./data/persons.json", JSON.stringify(req.body), function(err) {
        if(err) {
            return console.log(err);
        }
    }); 
    res.set('Content-Type', 'text/plain');
    res.send('Successful response.');
});

app.get('/json', (req, res) => {
    const fs = require('node:fs');
    fs.readFile('./data/persons.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        res.set('Content-Type', 'application/json');
        res.send(data);
    });
});

app.listen(4000); 