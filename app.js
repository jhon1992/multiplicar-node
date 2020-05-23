// tipos de required
// const fs = require('fs'); -- node  -> archivos nativos de node
// const fs = require('express'); -- express -> archivos externos que no vienen en node
// const fs = require('./fs') -> los archivos que creamos nosotros
const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTable } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {
    case 'listar':
        listarTable(argv.base, argv.limite).then(lista => {
                console.log('========================'.green);
                console.log(lista)
            })
            .catch(error => {
                console.log(error)
            });
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => console.log(`Archivo creado: ${archivo.green}`))
            .catch(error => {
                console.log(error)
            });
        break;
    default:
        console.log('comando no reconocido');

}

// if (parametro !== undefined) {
//     let base = parametro.split('=')[1];

//     crearArchivo(base).then(archivo => console.log(`Archivo creado: ${archivo}`))
//         .catch(error => {
//             console.log(error)
//         });
// }