let numero = 10;

if (numero == 1) {
    console.log("El número es 1");
} else if (numero == 2) {
    console.log("El número es 2");
} else {
    console.log("El número no es ni 1 ni 2");
}

// Estaciones del año
let mes = 11;
let estacion;
if (mes >= 1 && mes <= 2) {
    estacion = "Invierno";
} else if (mes >= 3 && mes <= 4) {
    estacion = "Primavera";
} else if (mes >= 5 && mes <= 6) {
    estacion = "Verano";
} else if (mes >= 7 && mes <= 8) {
    estacion = "Otoño";
} else {
    estacion = "No es un mes del año";
}

console.log(estacion);

// Ejercicio el cálculo de la hora del día

/**
 * 6am - 11am = Mañana
 * 12pm - 19pm = Tarde
 * 20pm - 23pm = Noche
 * 24pm - 5am = Durmiendo
 */

let hora = 15;
let mensaje;

if (hora >= 6 && hora < 12) {
    mensaje = "Buenos días";
} else if (hora >= 12 && hora < 19) {
    mensaje = "Buenas tardes";
} else if (hora >= 19 && hora < 24) {
    mensaje = "Buenas noches";
} else if (hora >= 0 && hora <= 5) {
    mensaje = "Durmiendo";
} else {
    mensaje = "No es una hora del día";
}

console.log(mensaje);

// Switch

let mes_ = 6;
let estacion_;
switch (mes_) {
    case 1:
    case 2:
        estacion_ = "Invierno";
        break;
    case 3:
    case 4:
        estacion_ = "Primavera";
        break;
    case 5:
    case 6:
        estacion_ = "Verano";
        break;
    case 7:
    case 8:
        estacion_ = "Otoño";
        break;
    default:
        estacion_ = "No es un mes del año";
        break;
}

console.log(estacion_);
