const express = require('express');
const app = express();
const bodyParser = require('body-parser')


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



//Rotas
const index = require('./routes/index');

app.use('/', index);

app.listen(3000);

module.exports = app;