const { log } = require("console");
const { crearArchivo } = require("./helpers/multiplicar");
const argv = require('yargs').argv

console.clear();

// desetructura el argumento en tres partes y nombra la tercera  node .\app.js --base=5
const [, , arg3 = 'base=5'] = process.argv;   // aca obtenemos --base=5

const [ , base= 5 ] = arg3.split('='); //divide el arg3 en donde esta el igual y nombra base a la segunda parte


console.log(process.argv)
console.log(arg3)
console.log(base)

//const base = 3;

crearArchivo ( base )
    .then( nombreArchivo => console.log( nombreArchivo, 'creado'))
    .catch( err => console.log( err ))



