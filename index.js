const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended : false }));

// parse application/json
app.use(bodyParser.json());

require('dotenv').config();

const port = process.env.PORT;

//Motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/rutasweb'));
/* app.use('/mascotas', require('./router/Mascotas-router')); */

//404
app.use((req, res, next) => {
    res.status(404).render('404', {
        titulo : "Error 404",
        descripcion : "La página no existe o no funciona"
    });
}); 

//Puerto
app.listen(port, () => {
    console.log("The server is currently working fine");
});