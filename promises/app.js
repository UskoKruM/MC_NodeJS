/*
// Creamos una promesa (resolver, rechazar):
let promesa = new Promise((resolve, reject) => {
    // resolve("Éxito al procesar los datos.");
    reject("Existe un error...");
});

// Me permite obtener la respuesta de la promesa:
promesa.then((resultado) => {
    console.log(resultado);
}, (error) => {
    console.log(error);
});
*/

let prom = require('./promesa.js');

let miPromesa = prom.calcular(15, 89);
miPromesa.then((data) => {
    console.log(data);
}, (error) => {
    console.log(error);
});