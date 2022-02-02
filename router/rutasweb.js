const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { titulo : "Mi titulo dinámico"});
});

router.get('/apps', (req, res) => {
    res.render('apps', { tituloApps : "You're in the apps's page"} );
});

router.get('/contact', (req, res) =>{
    res.render('contact');
});

module.exports = router;