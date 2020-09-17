var express = require('express');
var router = express.Router();

let personas = [{
    id: 1,
    nombre: "UskoKruM2010"
  },
  {
    id: 2,
    nombre: "Atxaga"
  },
  {
    id: 3,
    nombre: "Se0IX"
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express',
    nombreCanal: 'UskoKruM2010',
    personas: personas
  });
});

module.exports = router;