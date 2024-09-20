const express = require('express');

const dotenv = require('dotenv');

const cors = require('cors');
const doacaoRouter = require('./routes/doacaoRouter');
const usuarioDoador = require('./routes/usuariodoadorRouter');
const usuarioOng = require('./routes/usuarioongRouter');
const app = express();

app.set('port', process.env.PORT || 3005);
app.use(cors());
app.use(express.json());

app.use('/api', doacaoRouter);
app.use('/api', usuarioDoador);
app.use('/api', usuarioOng);

module.exports = app;