const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Search = require('./models/search');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//rotas da API
const routes = require('./controllers/routes');
app.use('/biblioteca', routes);


//Banco de dados

const DB_USER = 'pedrooofaria';
const DB_PASSWORD = encodeURIComponent('Lh9JqpWc8FSrEXWF');

mongoose
    .connect(
    `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster.jgmop0w.mongodb.net/biblioteca?retryWrites=true&w=majority`
    )
    .then(() => {
        console.log("Conectando...");
        app.listen(3000);
        console.log("Conectado ao Banco de Dados!");
    })
    .catch((err) => {
        console.log(err);
    })




