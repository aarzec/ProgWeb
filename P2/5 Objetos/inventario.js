function vender(nombreProducto, cantidad) {
    for (let clave in inventario) {
        let producto = inventario[clave];
        if (producto.nombre === nombreProducto) {
            if (producto.cantidad >= cantidad) {
                producto.cantidad -= cantidad;
                console.log(`Venta exitosa: ${cantidad} unidades de ${nombreProducto}.`);
            } else {
                console.log(`Error: Stock insuficiente para ${nombreProducto}.`);
            }
            return;
        }
    }
    console.log(`Error: El producto ${nombreProducto} no existe en el inventario.`);
}

function descuento(porcentaje) {
    if (porcentaje < 0) {
        console.log('Error: El porcentaje de descuento no puede ser negativo.');
        return;
    }
    for (let clave in inventario) {
        let producto = inventario[clave];
        let descuento = producto.precio * (porcentaje / 100);
        producto.precio -= descuento;
    }
    console.log(`Se aplicó un descuento del ${porcentaje}% a todos los productos.`);
}

const inventario = {
    producto1: {
        nombre: 'Papa',
        precio: 1,
        cantidad: 15
    },
    producto2: {
        nombre: 'Cebolla',
        precio: 2,
        cantidad: 17
    },
    producto3: {
        nombre: 'Rábano',
        precio: 3,
        cantidad: 24
    },
    producto4: {
        nombre: 'Lechuga',
        precio: 4,
        cantidad: 11
    }
};

Object.seal(inventario);


console.log('Inventario Inicial');
console.log(inventario);

vender('Papa', 2);
vender('Rábano', 13);
vender('Plátano', 6);

descuento(10);

console.log('Inventario final: ');
console.log(inventario);