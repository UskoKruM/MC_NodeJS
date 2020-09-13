const fs = require('fs'); // Requerimos el file system.

/*
fs.readFile('data.txt', (error, data) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(data); // Arroja un buffer.
    }
});
*/

/*
// Lo convierte a UTF-8:
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(data); // Arroja un buffer.
    }
});
*/

// Procesamiento asíncrono y síncrono.

// Procesamiento asíncrono:
console.log("Inicio");
fs.readFile('data.txt', 'utf-8', (error, data) => {
    if (error) {
        console.log(`Error: ${error}`);
    } else {
        console.log(data); // Arroja un buffer.
    }
});
console.log("Fin");

console.log("**************************************");

// Procesamiento asíncrono:
console.log("Inicio");
let data = fs.readFileSync('data.txt', 'utf-8');
console.log(data);
console.log("Fin");

/*
// Para renombrar un archivo:
fs.rename('data.txt', 'data_renombrado.txt', (error) => {
    if (error) {
        throw error;
    } else {
        console.log("¡Renombrado!");
    }
});
*/

fs.appendFile('data.txt', '\n¡Gracias por ver este tutorial!', (error) => {
    if (error) {
        throw error;
    } else {
        console.log("¡Contenido agregado!");
    }
});

/*
// Para eliminar un archivo:
fs.unlink('data_eliminar.txt', (error) => {
    if (error) {
        throw error;
    } else {
        console.log("¡Eliminado!");
    }
});
*/

// Crear una copia de un archivo:
// fs.createReadStream('data.txt').pipe(fs.createWriteStream('data_backup.txt'));

// Leer los archivos dentro de un directorio:
fs.readdir('./', (error, archivos) => {
    archivos.forEach(archivo => {
        console.log(archivo);
    });
});