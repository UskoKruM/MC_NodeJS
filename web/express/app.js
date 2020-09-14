// Importamos el módulo express:
const express = require('express');
const app = express(); // Inicializamos el módulo en la constante 'app'.

let estaLogeado = () => true;

// Para mostrar una traza:
let logger = (req, res, next) => {
    console.log(`Petición de tipo: ${req.method}`); // Esto saldrá en la consola.
    next(); // Para saltar a lo que tenga que seguir haciendo.
};

let showIP = (req, res, next) => {
    console.log("IP: 127.0.0.1");
    next();
};

// El parámetro next representa el uso de middleware.
// Este middleware se va a invocar como un interceptador entre mis peticiones.
/*
app.use((req, res, next) => {
    if (estaLogeado()) {
        next();
    } else {
        res.send("No estás logeado...");
    }
});

app.use(logger);
*/

app.use((req, res, next) => {
    if (estaLogeado()) {
        next();
    } else {
        res.send("No estás logeado...");
    }
}, logger, showIP);

app.get('/:usuario', (req, res) => {
    let usuario = req.params.usuario;
    // Obteniendo el método del request:
    res.send(`Hola Mundo! Bienvenido(a), ${usuario}, estamos usando el método: ${req.method}`);
});

app.post('/', (req, res) => {
    res.send(`Hola Mundo! Usando el método: ${req.method}`);
});

app.put('/', (req, res) => {
    res.send(`Hola Mundo! Usando el método: ${req.method}`);
});

app.delete('/', (req, res) => {
    res.send(`Hola Mundo! Usando el método: ${req.method}`);
});

// Indicamos el puerto donde va a escuchar la aplicación:
let puerto = 3004;
app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}.`);
});