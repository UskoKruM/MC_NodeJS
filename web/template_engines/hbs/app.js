const express = require('express');
const app = express();

let personas = [{
        id: 1,
        nombre: "UskoKruM2010"
    },
    {
        id: 2,
        nombre: "Atxaga"
    },
    {
        id: 3,
        nombre: "Se0IX"
    },
];

// Para asociar nuestro motor de plantillas a NodeJS, específicamente a Express:
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    // Indicamos que la respuesta va a renderizar una plantilla:
    res.render('template', {
        titulo: 'pug',
        mensaje: 'UskoKruM2010 | Pug',
        personas: personas
    });
});

app.listen(3001, () => {
    console.log("Corriendo en el puerto 3001");
});