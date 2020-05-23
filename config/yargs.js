const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
};

const argv = require('yargs')
    .command('listar', 'Imprimir en consola la tabla de multiplicar', options)
    .command('crear', 'Genera un archivo con la tabla de muntiplicar', options)
    .help()
    .argv;

module.exports = {
    argv
}