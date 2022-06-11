const fs = require('fs')
const colors = require('colors');


const crearArchivo = async( base = 5, listar = false, hasta = 10 ) => {

    try {
        if ( listar ){
            console.log('=================='.rainbow)
            console.log('   Tabla del:', base )
            console.log('=================='.rainbow)
        }

        let salida = '';
        let consola = '';

        for ( let i = 1; i <= hasta ; i++) {
            salida += `${base} x ${i} = ${ base * i}\n`
            consola += `${base} ${ 'x'.yellow } ${i} = ${ base * i}\n`
        }

        if ( listar ){
            console.log(consola)
        }

        // fs.writeFile( `tabla-${base}.txt`, salida, ( err ) => {
        //     if (err) throw err;
        //     console.log(`tabla-${base}.txt creada`);
        // })

        fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
        //console.log(`tabla-${base}.txt creada`);
        return `tabla-${base}.txt`
        
    } catch (err) {
        throw err;
    }


}

module.exports = {
    crearArchivo,
}