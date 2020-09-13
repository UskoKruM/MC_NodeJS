const funcionesMatematicas = require('./funcionesMatematicas.js');

console.log(funcionesMatematicas.autor);
console.log(funcionesMatematicas.saludar());
console.log(funcionesMatematicas.potenciar(12, 3));

setTimeout(() => {
    console.log(funcionesMatematicas.restar(235, 13));
    console.log("He finalizado");
}, 3000);

console.log(funcionesMatematicas.restar(19, 3));