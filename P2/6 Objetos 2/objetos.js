const people = [
    { name: "Ana", age: 30 }
]

// Metodos get en objetos
let personaGet = {
    nombre: "Andrés",
    apellido: "Romero",
    edad: 20,
    get nombreCompleto() { // No es una propiedad, ahora es un método getter
        return this.nombre + " " + this.apellido;
    }
}

console.log(personaGet.nombreCompleto);

// Validación
let personaSet = {
    nombre: "Andrés",
    apellido: "Romero",
    edad: 20,
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },
    get nombreCompleto() { // No es una propiedad, ahora es un método getter
        return this.nombre + " " + this.apellido;
    },
    set establecerIdioma(idioma) { // No es una propiedad, ahora es un método getter
        
    },
}

console.log(personaSet.lang);

// Método set en objetos
// Establece o modifica los valores de los atributos de los objetos

let personaSet2 = {
    nombre: "Andrés",
    apellido: "Romero",
    edad: 20,
    idioma: "es",
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang(lang) {
        this.idioma = lang;
    },
    get nombreCompleto() { // No es una propiedad, ahora es un método getter
        return this.nombre + " " + this.apellido;
    },
}

console.log(personaSet2.lang);
personaSet2.lang = "en";
console.log(personaSet2.lang);

// Constructores
// Si se desea crear más objetos del mismo tipo no es posible, para esto se emplean constructores
// Es una función especial que permite trabajar con Objetos en JS

function PersonaFC(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
}

let padre = new PersonaFC("Joe", "Garcia", "joegarcia@espe.edu.ec");
console.log(padre);
padre.tel = "012345";
console.log(padre.tel);

let madre = new PersonaFC("Maria", "Corina", "mcorina@espe.edu.ec");
console.log(madre);

// Agregar métodos a un constructor de objetos
function PersonaFCM(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + " " + this.apellido;
    };
}

let padre2 = new PersonaFCM("Joe", "Garcia", "joegarcia@espe.edu.ec");
console.log(padre2.nombreCompleto());

let madre2 = new PersonaFCM("Maria", "Corina", "mcorina@espe.edu.ec");
console.log(madre2.nombreCompleto());

// Uso de prototype

PersonaFCM.prototype.tel = "33445566";
console.log(madre2.tel);

// Uso del método call
let personaC1 = {
    nombre: "Diego",
    apellido: "Cajas",
    nombreCompleto: function() {
        return this.nombre + " " + this.apellido;
    },
}

let personaC2 = {
    nombre: "Andrés",
    apellido: "Farías",
}

// Para usar el método nombreCompleto que pertenece a C1 con los datos de C2
console.log(personaC1.nombreCompleto());
console.log(personaC1.nombreCompleto.call(personaC2));

// Pasar argumentos a call
let personaCP1 = {
    nombre: "Diego",
    apellido: "Cajas",
    nombreCompleto: function(titulo, tel) {
        return titulo + " " + this.nombre + " " + this.apellido + " - " + tel;
    },
}

let personaCP2 = {
    nombre: "Andrés",
    apellido: "Farías",
}

console.log(personaCP1.nombreCompleto("Dr", "098764563"));
console.log(personaCP1.nombreCompleto.call(personaCP2, "Ing", "091235678"));


