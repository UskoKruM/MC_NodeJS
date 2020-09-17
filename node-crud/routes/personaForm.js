var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../models/persona');

/* GET users listing. */
router.post('/persona/operar', (req, res, next) => {
  if (req.body._id === "") {
    let persona = new Persona({
      dni: req.body.txtDNI,
      apellidos: req.body.txtApellidos,
      nombres: req.body.txtNombres,
      edad: req.body.numEdad
    });
    persona.save();
  } else {
    Persona.findByIdAndUpdate(req.body._id, {
      $set: req.body
    }, {
      new: true
    }, (err, model) => {
      if (err) {
        throw err;
      }
    });
  }
  res.redirect('/');
});

module.exports = router;