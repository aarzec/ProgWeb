/**
 * Universidad de las Fuerzas Armadas - ESPE
 * Nombre: Andrés Romero
 * Fecha: 13/01/2025
 */

class Producto {
    constructor(nombre, precio, cantidad, categoria) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
    }
}

class Inventario {
    static #productos = [];

    static agregarProducto(producto) {
        this.#productos.push(producto);
    }

    static listarProductos() {
        const productosOrdenados = this.#productos.sort((a, b) => a.precio - b.precio);
        console.log("--- Lista de productos (ascendente) ---");
        productosOrdenados.forEach((producto) => {
            console.log("-> " + producto.nombre + ": $" + producto.precio + " | " + producto.cantidad + "x");
        });
    }

    static filtrarProductos(categoria) {
        const productosFiltrados = this.#productos.filter((producto) => {
            return producto.categoria == categoria;
        });
        console.log("--- Productos de la categoría '" + categoria + "' ---");
        productosFiltrados.forEach((producto) => {
            console.log("-> " + producto.nombre + ": $" + producto.precio);
        });
    }

    static obtenerProducto(nombre) {
        const productos = this.#productos.filter((producto) => {
            return producto.nombre == nombre;
        });
        if (productos.length < 1) {
            return null;
        }
        return productos[0];
    }

    static actualizarProducto(producto) {
        let indice = 0;
        for (let i = 0; i < this.#productos.length; i++) {
            if (this.#productos[i].nombre == producto.nombre) {
                break;
            };
            indice++;
        }

        this.#productos[indice] = producto;
    }
}

let ventas = [];

class Venta {
    constructor() {
        this.id = ventas.length;
        this.fecha = new Date();
        this.productos = [];

        ventas.push(this);
    }

    realizarVenta(nombreProducto, cantidad) {
        // Validaciones
        if (typeof cantidad != "number") {
            console.log("[ERROR] La cantidad proporcionada no es un número");
            return;
        }

        if (cantidad <= 0) {
            console.log("[ERROR] La cantidad proporcionada no es válida");
            return;
        }

        const productoEncontrado = Inventario.obtenerProducto(nombreProducto);
        if (productoEncontrado == null) {
            console.log("[ERROR] El producto especificado no existe");
            return;
        }

        if (productoEncontrado.cantidad <= 0) {
            console.log("[ERROR] No hay stock de este producto");
            return;
        }

        if (productoEncontrado.cantidad < cantidad) {
            console.log("[ERROR] No hay stock suficiente para este producto");
            return;
        }

        // Descontar cantidad
        productoEncontrado.cantidad -= cantidad;
        Inventario.actualizarProducto(productoEncontrado);

        this.productos.push({
            producto: {
                nombre: productoEncontrado.nombre,
                precio: productoEncontrado.precio,
                categoria: productoEncontrado.categoria
            },
            cantidad,
        });

        console.log("\n[OK] Venta de " + cantidad + "x " + productoEncontrado.nombre + " exitosa! Precio: $" + (productoEncontrado.precio * cantidad) + "\n");
    }

    static obtenerVenta(id) {
        const ventasF = ventas.filter((venta) => {
            return venta.id == id;
        });
        if (ventasF.length < 1) {
            return null;
        }
        return ventasF[0];
    }

    static actualizarVenta(venta) {
        let indice = 0;
        for (let i = 0; i < ventas.length; i++) {
            if (ventas[i].id == venta.id) {
                break;
            };
            indice++;
        }

        this.ventas[indice] = venta;
    }

    realizarDescuento(categoria, porcentaje) {
        this.productos.forEach((item) => {
            if (!item.producto.categoria == categoria) {
                return;
            }
            item.producto.precio *= (porcentaje / 100);
        });

        console.log("\n[OK] Se ha aplicado un descuento del " + porcentaje + "% a todos los productos de la categoría '" + categoria + "'")
    }

    imprimirVenta() {
        console.log("\n--- Venta ID: " + this.id);
        console.log("-> Fecha: " + this.fecha);
        console.log("-> Items: ");
        this.productos.forEach((item) => {
            console.log("  - " + item.cantidad + "x " + item.producto.nombre + " | Total: $" + (item.cantidad * item.producto.precio));
        });
        console.log("-> Total: $" + this.obtenerTotalVenta());
    }

    obtenerTotalVenta() {
        let total = 0;
        this.productos.forEach((item) => {
            total += (item.cantidad * item.producto.precio);
        });
        return total;
    }
}

function reporteAvanzado() {
    console.log("\n\n --- REPORTE AVANZADO ----");

    console.log("\n -> Inventario actualizado:");
    Inventario.listarProductos();

    console.log("\n -> Ventas realizadas:");
    let totalIngresos = 0;
    let productosVendidos = {};
    ventas.forEach((venta) => {
        totalIngresos += venta.obtenerTotalVenta();
        venta.productos.forEach((item) => {
            if (!productosVendidos[item.producto.nombre]) {
                productosVendidos[item.producto.nombre] = 0;
            }
            productosVendidos[item.producto.nombre] += item.cantidad;
        });
        venta.imprimirVenta();
    });

    console.log("\n -> Total de ingresos: " + ventas.length + " ventas generaron un ingreso total de $" + totalIngresos);
    
    let masVendidoNombre = null;
    let masVendidoCantidad = 0;
    Object.keys(productosVendidos).forEach((key) => {
        if (productosVendidos[key] > masVendidoCantidad) {
            masVendidoNombre = key;
            masVendidoCantidad = productosVendidos[key];
        }
    });

    console.log("El producto más vendido fue: '" + masVendidoNombre + "' con " + masVendidoCantidad + " unidades vendidas en total");
}


// Función principal autoejecutable
(function() {
    Inventario.agregarProducto(new Producto("Banano", 25, 30, "frutas"));
    Inventario.agregarProducto(new Producto("Lechuga", 20, 30, "verduras"));
    Inventario.agregarProducto(new Producto("Tomate", 10, 50, "verduras"));

    Inventario.listarProductos();
    Inventario.filtrarProductos("verduras");

    const venta = new Venta();
    venta.realizarVenta("Banano", 5);
    venta.realizarVenta("Lechuga", 10);
    venta.realizarVenta("Tomate", 15);

    venta.imprimirVenta();
    venta.realizarDescuento("verduras", 50);
    venta.imprimirVenta();

    Inventario.listarProductos();

    reporteAvanzado();
})();
