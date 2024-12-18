let estudiantes = [
    {
        nombre: "Juan",
        apellido: "Pérez",
        calificaciones: [20, 20, 16, 18, 14]
    },
    {
        nombre: "María",
        apellido: "Juárez",
        calificaciones: [10, 9, 16, 12, 17]
    },
    {
        nombre: "Carlos",
        apellido: "Lara",
        calificaciones:  [14, 9, 5, 8, 14]
    },
    {
        nombre: "David",
        apellido: "Laravel",
        calificaciones:  [1, 9, 5, 8, 2]
    }
]

console.log("------------------------------------");
for (let i = 0; i < estudiantes.length; i++) {
    const estudiante = estudiantes[i];

    // Agregar calificaciones
    estudiante.calificaciones.push(20);

    // Calcular promedio
    let suma = 0;
    for (let j = 0; j < estudiante.calificaciones.length; j++) {
        suma += estudiante.calificaciones[j];
    }
    estudiante.promedio = suma / estudiante.calificaciones.length;

    // Clasificar estudiantes
    if (estudiante.promedio >= 16) {1
        estudiante.status = "Excelente";
    } else if (estudiante.promedio >= 12 && estudiante.promedio < 16) {
        estudiante.status = "Bueno";
    } else if (estudiante.promedio >= 8 && estudiante.promedio < 12) {
        estudiante.status = "Aprobado";
    } else {
        estudiante.status = "Reprobado";
    }

    // Máxima y mínima calificación
    estudiante.maximo = estudiante.calificaciones.reduce((a, b) => a > b ? a : b);
    estudiante.minimo = estudiante.calificaciones.reduce((a, b) => a < b ? a : b);

    console.log(`${estudiante.nombre} ${estudiante.apellido}:
    Clasificación: ${estudiante.status}
    Promedio: ${estudiante.promedio}
    Calificación más alta: ${estudiante.maximo}
    Calificación más baja: ${estudiante.minimo}
------------------------------------`);
}

const mejor_estudiante = estudiantes.reduce((a, b) => a.promedio > b.promedio ? a : b);
const peor_estudiante = estudiantes.reduce((a, b) => a.promedio < b.promedio ? a : b);

console.log("El estudiante con el peor promedio es " + peor_estudiante.nombre + " " + peor_estudiante.apellido + " con un promedio de " + peor_estudiante.promedio);

console.log("El estudiante con el mejor promedio es " + mejor_estudiante.nombre + " " + mejor_estudiante.apellido + " con un promedio de " + mejor_estudiante.promedio);