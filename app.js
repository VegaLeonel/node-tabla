const { log } = require("console");
const argv = require("./config/yargs");
//const { argv } = require("process");
const { crearArchivo } = require("./helpers/multiplicar");
require('colors')

console.clear();



crearArchivo ( argv.b, argv.l, argv.h )
    .then( nombreArchivo => console.log( nombreArchivo.bgGreen, 'creado'))
    .catch( err => console.log( err ))



