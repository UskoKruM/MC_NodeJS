let calcular = (numero1, numero2) => {
    return new Promise((res, rej) => {
        // Simulamos la demora del procesamiento de esta función:
        setTimeout(() => {
            let suma = numero1 + numero2;
            if (suma < 100) {
                res(suma);
            } else {
                rej("Error al procesar los datos...");
            }
        }, 2000);
    });
}

module.exports = {
    calcular
}