let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let personaSchema = new Schema({
    id: {
        type: String
    },
    dni: {
        type: String
    },
    apellidos: {
        type: String
    },
    nombres: {
        type: String
    },
    edad: {
        type: Number,
        min: 1
    }
}, {
    versionKey: false
});

let Persona = mongoose.model('Personas', personaSchema);

module.exports = Persona;