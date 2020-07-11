const express = require('express');
const cors = require('cors');
const app = express()

//Código setting
app.set('port', process.nextTick.PORT || 4000);

//Código middlewares
app.use(cors());
app.use(express.json());

//Código routes
app.use('/api/users', require('./routes/users'))
app.use('/api/notes', require('./routes/notes'))

module.exports = app;