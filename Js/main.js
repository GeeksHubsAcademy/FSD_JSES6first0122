

//  let a = 5;

//  let b = a;

 
// console.log("a vale..." , a, " mientras que b vale ...",b);
// a = 8;
// console.log("a vale..." , a, " mientras que b vale ...",b);

// const c = 10;

// //c = 11; esto nos generaría un error

// //////////////////////////////

// function Sumar(a,b){

//     return a + b;

// };

// const Restar = (a,b) => {

//     return a - b;

// };

// const Dividir = (a,b) => a / b; 

// const Multiplicar = a => a*2;

//Esto es lo mismo que lo de la línea 32

// function Multiplicar (a) {
//     return a*2;
// }


// const DragonBall = (guerrero) => {
    //     let mono = {
        //         Nombre: guerrero,
        //         Planeta: "Vegeta"
        //     }
        
        //     return mono;
        // }
        

// const DragonBall = guerrero => ({Nombre: guerrero, Planeta: "Vegeta"});
// let nombre = prompt("Dime un guerrero");


// let res = DragonBall(nombre);

// console.log(res);

// let fontaneros = [
//     {nombre: "Armando", edad: 35},
//     {nombre: "Ambrosio", edad: 33},
//     {nombre: "Amparo", edad: 40},
//     {nombre: "Amelia", edad: 31},
//     {nombre: "Amancio", edad: 20},
// ];

// if(fontaneros[6]?.nombre != ""){
//     console.log("enhorabuena, ", fontaneros[6].nombre);
// }


// let frutas = ['manzana','platano','kiwi','uva','arandano','coco','aguacate','sandia'];


// // for(let i = 0; i < frutas.length; i++){
// //     frutas[i] += 's';
// // }

// let plurales = frutas.map(pepito => pepito + 's');
// //lo que hay posterior a la flecha es lo que el map irá pusheando automáticamente a un nuevo array

// console.log(plurales);

// const Iva = (precio, tasa = 0.21) => {
//     return precio * tasa;
// }

// console.log(Iva(1000));

// let getPrecioFinal = (numero, prefijo = "RX") => prefijo + numero;

// let random = Math.floor(Math.random() * 999);


// let resultado = getPrecioFinal(random);
// console.log("El robot se llama: ", resultado);


///////////////////////////////////

/////////SPREAD

///////////////////////////////////

// const describePokemon = (nombre,ataque,color,edad) => {

// }

// let arrayPokemon = ["Pikachu","pegar","verde",35];

// //spread
// //describePokemon(arrayPokemon[0],arrayPokemon[1],arrayPokemon[2],arrayPokemon[3]);
// describePokemon(...arrayPokemon);


/////////////////////////////////

//////REST

/////////////////////////////////


//esta funcionalidad permite flexibilizar el número de parámetros que recibe una función

// const funcionRest = (...arrayDeArgumentos) => {
//     console.log(arrayDeArgumentos);
// };
    
// funcionRest(1, 2, 3, 4, 5); // [1, 2, 3, 4, 5]
// funcionRest(1,2,3,4,5,6,7,8,9,0,2);

// const functionSumaDinamica = (...parametros) => {

// }

// functionSumaDinamica(1,2);
// functionSumaDinamica(1,2,3,4);
// functionSumaDinamica(1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4,1,2,3,4);
    
// function g(arg1, arg2, ...argRest) {
//     console.log(arg1, arg2, argRest);
// }
    
// g(1, 2, 3, 4, 5); // 1 2 [3,4,5]


//INTERPOLACIÓN

// Nos permite incluir variables JS en código HTML

// let bebida = "agua";

// console.log(`Me encanta beber ${bebida}`);

// let urlEnding = "control";

// console.log(`http://www.callumapp.com/${urlEnding}`);

// let query = "flight to Turkey";

// console.log(`https://google.com/search?q=${query}`);


// let arrayAlumnos = ['Rodrigo','Aida','Juan','Cristian','Callum','Angel'];

// let alumno1 = arrayAlumnos[0];
// let alumno2 = arrayAlumnos[1];
// let alumno3 = arrayAlumnos[2];
// let alumno4 = arrayAlumnos[3];
// let alumno5 = arrayAlumnos[4];
// let alumno6 = arrayAlumnos[5];

// let [a,b,c,d,e,f] = arrayAlumnos;

// console.log(c,e,f);

// let array2 = [c,e,f];

// console.log(array2);

// let objeto = { Nombre: 'Juanma', Edad: 27, Nacionalidad: "Italiano"};

// let { Nombre: d, Edad: e, Nacionalidad: f } = objeto;

// console.log(d, e, f); 

// let { x, y, z } = obj;

/////TIPOS DE FOR



let videojuegos = ['Crash Bandicoot','Splinter Cell','Warzone','Warcraft III','League of Legends'];

//FOR 
// for(let i = 0; i < videojuegos.length; i++){
//     console.log(videojuegos[i]);
// }

//FOR OF
for(let videojoc of videojuegos){
    console.log(videojoc);
};

//FOR IN
let apellidos = ['perez', 'garcia', 'gomez'];

for (let indice in apellidos) {
    console.log('apellidos[' + indice + '] = ' + apellidos[indice]);
    //apellidos[indice]
}