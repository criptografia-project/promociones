const express = require('express');
const bodyParser = require('body-parser')
const morgan = require('morgan')

var app = express();

app.use(bodyParser.json());
app.use(morgan('dev'));

//Settings
app.set('port',process.env.PORT || 3004);

//Rutas
require('./src/rutas/rutasTiendas')(app);
require('./src/rutas/rutasPromocion')(app);

app.listen(app.get('port'), () =>{
  console.log('Server on port',app.get('port'))
})

