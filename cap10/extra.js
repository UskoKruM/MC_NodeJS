let mensaje = "Depurando código!";

function saludar() {
    debugger;
    console.log(mensaje);
}

module.exports = {
    saludar: saludar
}