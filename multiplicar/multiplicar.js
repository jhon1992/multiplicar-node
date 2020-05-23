const fs = require('fs');
const colors = require('colors');

let crearArchivo = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un número`);
            return;
        }
        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`table-${base}.txt`);
        });
    });
}

let listarTable = (base, limit = 10) => {
    return new Promise((resolve, reject) => {
        let data = '';
        if (!Number(base) || !Number(limit)) {
            reject(`El valor introducido para base ${base} o el límite ${limit} no es un número`);
            return;
        }
        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }
        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTable
}