/**
 * Ejemplo básico de uso de fetch a través del método get
 */

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json() // Convierte la respuesta de la obtención de la API en formato JSON
    ).then(data => 
        console.log(data) // Muestra los datos en la consola
    )


fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Nuevo post',
            body: 'Contenido del post',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));

/**
 * Fetch API - Métodos asíncronos
 */

async function obtenerDatos() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json();
    } catch (error) {
        console.error(error);
    }
}

let datos = obtenerDatos();
console.log("datos", datos);
