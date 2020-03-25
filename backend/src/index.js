// Instancia uma importação de express na var express
const express = require('express');

// cors é um módulo de segurança
const cors = require('cors');
// O ./ é usado porque routes não é um pacote mas um arquivo
const routes = require('./routes');

// Instancia meu aplicativo com o express
const app = express();

app.use(cors());

// Define que todas as requisições serão feitas
// em JSON, evitando o erro undefined no POST de
// um novo user
app.use(express.json());
app.use(routes);


// Espera na porta 3333.
// Pode ser acessado no navegador com:
// localhost:3333
app.listen(3333);