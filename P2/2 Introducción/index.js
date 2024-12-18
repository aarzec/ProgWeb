var nombre;
var edad;
var altura;

nombre = "Juan";
edad = 20;
altura = 1.80;

console.log("El nombre de la persona es:" + nombre);
console.log("La edad de la persona es: " + edad);
console.log("La altura de " + nombre + " es " + altura );

//Var para declarar una variable global
//let para declarar una variable local o tambien una variable de bloque
//const declara una variable constante es decir que su valor no va a cambiar


//if marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//switch marca un bloque de instrucciones que se ejecutan si una condicion se cumple
//for marca una condicioon de istrucciones que se ejecutan varias veces
//while marca una ocndicion de instrucciones que se ejecutan varias veces

//function marca un bloque de instrucciones que se ejecutan cuando se llama
//try se ejecuta cuando no se produce un error
//catch se ejecuta cuando se produce un error
//return se ejecuta cuando una condicion se cumple, ademas de retornar un valor

//Tipos de datos en JS

//Tipo de datos string

var nombre = "Juan";
console.log(nombre);

//Tipo de dato numérico
var edad = 20;
console.log(edad);

//Tipo de dato Objeto object

var objecto = {
    nombre: "Andrés",
    edad: 19,
    altura:1.75
}

console.log(objecto)

//Tipo de dato Typeof

var var1 = "José";
var var2 = false;
var var3 = BigInt(123);
var var4 = [1, 2, 3];


console.log(var1);
console.log(typeof var1);

console.log(var2);
console.log(typeof var2);

console.log(var3);
console.log(typeof var3);

console.log(var4);
console.log(typeof var4);


//tipo de datos boooleanos (true, false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo function
function saludar(){}
console.log(saludar);
console.log(typeof saludar);

//Tipo symbol

var simbolo = Symbol();

console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una funcion

class Persona {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Persona);
console.log(typeof Persona);


//Tipo undefined

var variable;
console.log(variable);
console.log(typeof variable);


//Tipo de dato null

var variable1 = null;
console.log(variable1);
console.log(typeof variable1);


//tipos de datos de tipo de arreglos en JS
var autos = ["BMW", "Mercedes Benz", "Volvo"];
console.log(autos);
console.log(typeof autos);


//Tipo de dato de cadenas vacias

var vacio = "";
console.log(vacio);
console.log(typeof vacio);


//Reglas de nombres de variables en JS
let nombreCompleto;
let nombrecompleto;


//Formas correctas de declarar una variable
var a1nombreCompleto;
var _nombreCompleto;
var $nombreCompleto;

//Forma o formas incorrectas de crear una variable
//var 1nombrecompleto;
//var #nombrecompleto;
//var %nombrecompleto;
//no esta permitido ingresar estos tipo de datos

//Operadores en JS
//Operadores Aritmeticos
//Operadores de asignacion
//Operadores de comparacion
//Operadores logicos
//Operadores de incremento y decremento


//Operador Adicion

//Suma 
// let x = 6;
// let y = 3;
// let z = x + y
// console.log(z)

//Resta 
// let x = 6;
// let y = 3;
// let z = x - y
// console.log(z)

//Multiplicacion

// let x = 6;
// let y = 3;
// let z = x * y
// console.log(z)

//Division 
// let x = 6;
// let y = 3;
// let z = x / y
// console.log(z);


//Modulo
// let x = 6;
// let y = 3;
// let z = x % y
// console.log(z)

//Incremento

//Pre-incremento
// let a = 7;
// let x = 9;
// x = ++a;

// console.log(a)
// console.log(x)

//Pre-decremento

// let b = 7;
// let z = 9;
// z = --b;

// console.log(b)
// console.log(z)



//Post-incremento
// let a = 7;
// let x = 9;
// x = a++;

// console.log(a)
// console.log(x)

//Post-decremento
// let a = 7;
// let x = 9;
// x = a--;

// console.log(a)
// console.log(x)

//Operadores de comparación
//Igual == 
//No Igual != 
//Mayor que >
//Menor que <
//Mayor o igual que >=
//Menor o igual que <=

var l = 10;
var f = 5;
var c = 1 == f; // == no es estricto, === es estricto
var d = 1 != f;
var e = 1 > f;
var f = 1 < f;
var g = 1 >= f;
var h = 1 <= f;

let comparacion1 = 10;
let comparacion2 = "10";

let comparacion3 = comparacion1 == comparacion2;
console.log(comparacion3);

console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(f);
console.log(h);

//Variables de procedencia de operadores
//1. ()
//2. **
//3. * /
//4. + -
//5. ++ --

let a1 = 6, b1 = 7, c1 = 8;
let dato = (a1 + b1) * c1;
console.log(dato)

let a2 = 6, b2 = 7, c2 = 8, d2 = 9;
let dato2 = a2 * (b2 + c2);
console.log(dato2)

let dato3 = a2 * b2 + c2 / d2;
console.log(dato3)

//Operadores de asignacion
//Suma y asignacion  +=
//Resta y asignacion -=
//Multipl. y asignacion *=
//Division y asignacion /=

let a = 3;
let valorD = 3;

a+=3 //a = a + 3
console.log(a)

valorD-=3; //d = d-3
console.log(valorD)

let numero = 10;
if (numero % 2 == 0){
    console.log("El numero es par")
}else {
    console.log("El numero es impar")
}

//Deterinnar si una persona es mayor de edad
edadMayor = 19;
edadMenor = 15;

if (edadMenor >= 18){
    console.log("La persona es mayor de edad")
}else {
    console.log("La persona es menor de edad")
}

//Operadores AND ==> &&

let s = 12;

let valMin = 12; valorMax = 9;

if (s >= valMin && s <= valorMax){
    console.log("El valor esta dentro del rango")
}else{
    console.log("El valor esta fuera del rango")
}

//Operadores OR ==> ||


if (s >= valMin || s <= valorMax){
    console.log("El valor esta dentro del rango")
}else{
    console.log("El valor esta fuera del rango")
}

//Operadores Ternarios

let resultado = (s >= valMin && s <= valorMax) ? "El valor esta dentro del rango" : "El valor esta fuera del rango";
console.log(resultado)

//Conversion
let miNumero = "10"

console.log(typeof miNumero);

let edad1 = parseInt(miNumero);
//parseInt: convierte un valor en numero entero (sin decimales)
console.log(typeof edad1);

let edad2 = Number(miNumero);
//Number: convierte un valor en un numero (puede ser entero o flotante)
console.log(typeof edad2);


if (edad2 >= 18){
    console.log("Puede votar")
}else{
    console.log("No puede votar")
}

console.log(parseInt("42px")) //Solo la parte numerica = 42
console.log(parseInt(3.1415)) //Convierte solo la parte entera = 3
console.log(parseInt("abc")) //existe un valor numero para convertir

console.log(Number("42px")) //No se puede convertir toda la cadena
console.log(Number(3.1415)) //convierte el numero en un flotante
console.log(Number("abc")) //no hay numero en la cadena

console.log(Number(true)) //No se puede convertir toda la cadena
console.log(Number(false)) //convierte el numero en un flotante
console.log(Number(null)) //no hay numero en la cadena
console.log(Number(undefined)) //No se puede convertir toda la cadena