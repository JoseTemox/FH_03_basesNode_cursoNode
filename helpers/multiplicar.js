const fs = require ('fs');
const colors = require('colors');


const crearArchivo = async (base =5, listar = false, hasta=10) => {

    try {
        let salida, consola = '';
        for(let i=1; i<=hasta; i++){
            // console.log(`${base} x ${i} = ${base*i}`);
            salida += `${base} ${'x'.green} ${i} ${'='.green} ${base*i}\n`;
            consola += `${base} x ${i} = ${base*i}\n`;

        }

        if(listar){

            console.log('================================='.green);
            console.log('Tabla del '.green,colors.bgRed(base));
            console.log('================================='.green);
            console.log(salida);
        }


        // fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
        //     if(err) throw err;

        //     console.log(`tabla-${base}.txt creado`);
        // })
        fs.writeFileSync(`./salida/tabla-${base}.txt`,consola);
        return `tabla-${base}.txt`;




    } catch (error) {
        throw error;

    }









}
// const crearArchivo = (base =5) => {

//     return new Promise((resolve, reject) => {



//         console.log('=================================');
//         console.log('Tabla del 5');
//         console.log('=================================');
//         let salida = '';

//         for(let i=1; i<=10; i++){
//             // console.log(`${base} x ${i} = ${base*i}`);
//             salida += `${base} x ${i} = ${base*i}\n`;

//         }
//         console.log(salida);

//         // fs.writeFile(`tabla-${base}.txt`,salida, (err) => {
//         //     if(err) throw err;

//         //     console.log(`tabla-${base}.txt creado`);
//         // })
//         fs.writeFileSync(`tabla-${base}.txt`,salida);
//         resolve(`tabla-${base}.txt`);
//     })





// }

module.exports = {
    // crearArchivo: crearArchivo
    crearArchivo
}