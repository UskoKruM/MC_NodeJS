let autor = "UskoKruM2010";

function sumar(num1, num2) {
    return num1 + num2;
}

function potenciar(base, exponente) {
    var potencia = 1;
    for (var x = 0; x < exponente; x++) {
        potencia *= base;
    }
    return potencia;
}

// module.exports.autor = autor;
// module.exports.potenciar = potenciar;

module.exports = {
    autor: autor,
    saludar: function () {
        console.log("Hola Mundo!");
        return true;
    },
    sumar: (v1, v2) => {
        return v1 + v2;
    },
    restar: (v1, v2) => v1 - v2, // Definición corta.
    potenciar: potenciar
};