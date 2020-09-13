/*
const _ = require('lodash'); // Es una recomendación usar _

let comando = process.argv;
console.log(comando);

if (process.argv[2] === 'usuario') {
    if (process.argv[3] === 'UskoKruM2010') {
        let x = {
            "nombre": "Oscar"
        };
        let y = {
            "apodo": "UskoKruM2010"
        };
        let z = [{
            nombre: "Oscar Alejandro Flavio",
            apellido: "García Fuentes",
            edad: 28
        }, {
            nombre: "Karen Cecilia",
            apellido: "Arbañil Nanfuñay",
            edad: 29
        }];

        let resultado = _.assign(x, y);
        console.log(resultado);

        // Realiza una acción (ejecución de una función flecha) 3 veces:
        _.times(3, () => console.log("UskoKruM2010"));

        // Busca un elemento bajo un criterio:
        let busqueda = _.find(z, {
            nombre: "Karen Cecilia",
            apellido: "Arbañil Nanfuñay"
        });
        console.log(busqueda);
    }
} else {
    console.log("Comando desconocido");
}
*/

const _ = require('lodash'); // Es una recomendación usar _
// const argv = require('yargs'); // Se recomienda usar el nombre de constante 'argv'.
const argv = require('yargs').argv;

// console.log(argv);
// console.log(argv.argv);

if (argv.usuario === 'UskoKruM2010') {
    let x = {
        "nombre": "Oscar"
    };
    let y = {
        "apodo": "UskoKruM2010"
    };
    let z = [{
        nombre: "Oscar Alejandro Flavio",
        apellido: "García Fuentes",
        edad: 28
    }, {
        nombre: "Karen Cecilia",
        apellido: "Arbañil Nanfuñay",
        edad: 29
    }];

    // Busca un elemento bajo un criterio:
    let busqueda = _.find(z, {
        nombre: "Karen Cecilia",
        apellido: "Arbañil Nanfuñay"
    });
    console.log(busqueda);
} else {
    console.log("Usuario no válido...");
}