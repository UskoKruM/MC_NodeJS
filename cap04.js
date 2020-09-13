const os = require('os');

let cpu = os.cpus();
console.log(cpu);

let sistema = os.platform();
console.log(sistema);

let usuario = os.hostname();
console.log(usuario);

const fs = require('fs');

/*
fs.appendFile('uskokrum2010.txt', 'Vamos a aprender...', function (error) {
    if (error) {
        console.log("Hubo un error... " + error);
    }
});

fs.appendFile('info.txt', 'Información del CPU: ' + JSON.stringify(cpu), function (error) {
    if (error) {
        console.log("Hubo un error... " + error);
    }
});
*/

let cpu_string = JSON.stringify(cpu);
fs.appendFile('info.txt', `Información del servidor: ${cpu_string}`, function (error) {
    if (error) {
        console.log("Hubo un error... " + error);
    }
});