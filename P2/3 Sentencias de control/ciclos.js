/**
 * Ciclos
 */

// For

const heroes = ["Spiderman", "Hulk", "Ironman", "Thor", "Capitán América"];

console.log(">> For tradicional");
for (let i = 0; i < heroes.length; i++) {
    console.log(heroes[i]);
}

console.log(">> For in");
for (const i in heroes) {
    console.log(heroes[i]);
}

console.log(">> For of");
for (const heroe of heroes) {
    console.log(heroe);
}

/**
 * Usa un for tradicional o clásico cuando se necesite control total del índice
 * Se usa for in para iterar propiedades de un objeto
 * Se usa for of para iterar los valores de un iterable: arrays, cadenas de texto, map, set, nodelist
 */

for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue; // ir a la siguiente iteración
        // break; // rompe el ciclo
    }
    console.log(i);
}

// While
const carros = ["Mazda", "Audi", "Ferrari", "BMW"];
let i = 0;
while (i < carros.length) {
    console.log(carros[i]);
    i++;
}



