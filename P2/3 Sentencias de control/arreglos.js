/**
 * ARREGLOS
 */

const array = [1, 2, 3, 4, 5];
const array2 = new Array(1, 2, 3, 4, 5);
const array3 = Array.of(1, 2, 3, 4, 5);

let numeros = [1, 2, 4];
let colores = ["Amarillo", "Azul", "Rojo"];
let vacio = [];
let conjunto = [
    {
        nombre: "Ricardo",
        apellido: "Vargas",
    },
    {
        color: "rojo",
    }
];

let videojuegos = ["Mario 3", "Megaman", "Chrono Trigger"];
console.log(videojuegos);

let cuadrados = array.map((n) => n * n);
console.log(cuadrados);

let pares = array.filter((n) => n % 2 == 0);
console.log(pares);

let maximo = array.reduce((a, b) => a > b ? a : b);
console.log(maximo);