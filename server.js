

// Full tutorial on how to deploy an Angular application on heroku
// https://www.javaguides.net/2020/11/how-to-deploy-angular-application-to-heroku.html

// https://rb-front.herokuapp.com/home

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

const express = require('express');
const path = require ('path');
const port = process.env.PORT || 8080;
const app = express();


app.use(express.static('./dist/rb-front'));
app.set ('view engine', 'pug');
app.get("*", (req, res) => {
    res.sendFile("index.html", {root: './dist/rb-front'});
});

app.listen (port, () => {
    console.log (`Listening on port ${port}`);
})