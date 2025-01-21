class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio, categoria, stock) {
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.setPrecio(precio); 
        this.categoria = categoria;
        this.setStock(stock); 
    }

    getIdProducto() {
        return this.idProducto;
    }

    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }

    getPrecio() {
        return this.precio;
    }

    setPrecio(precio) {
        if (precio < 0) {
            console.warn("Advertencia: El precio no puede ser negativo. Se asignará 0.");
            this.precio = 0;
        } else {
            this.precio = precio;
        }
    }

    getStock() {
        return this.stock;
    }

    setStock(stock) {
        if (stock < 0) {
            console.warn("Advertencia: El stock no puede ser negativo. Se asignará 0.");
            this.stock = 0;
        } else {
            this.stock = stock;
        }
    }

    toString() {
        return `ID: ${this.idProducto}, Nombre: ${this.nombre}, Precio: $${this.precio}, Categoría: ${this.categoria}, Stock: ${this.stock}`;
    }
}

class Orden {
    static contadorOrdenes = 0;
    static get MAX_PRODUCTOS() {
        return 5;
    }

    constructor() {
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.descuentos = {}; 
    }

    getIdOrden() {
        return this.idOrden;
    }

    agregarProducto(producto) {
        if (this.productos.length >= Orden.MAX_PRODUCTOS) {
            console.error("Error: No se pueden agregar más productos a la orden.");
            return;
        }
        if (producto.stock <= 0) {
            console.error("Error: No hay stock del producto.");
            return;
        }
        producto.stock--;
        this.productos.push(producto);
        console.log(`Producto agregado: ${producto.nombre} (ID: ${producto.idProducto})`);
    }

    establecerDescuento(categoria, porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
            console.error("Error: El porcentaje de descuento debe estar entre 0 y 100.");
            return;
        }
        this.descuentos[categoria] = porcentaje / 100;
        console.log(`Descuento del ${porcentaje}% establecido para la categoría: ${categoria}`);
    }

    calcularTotal() {
        let totalVenta = 0;
        for (const producto of this.productos) {
            let precioFinal = producto.precio;
            const descuento = this.descuentos[producto.categoria] || 0;
            precioFinal *= (1 - descuento);
            totalVenta += precioFinal;
        }
        return totalVenta;
    }

    calcularImpuestos() {
        return this.calcularTotal() * 0.15;
    }

    mostrarOrden() {
        console.log(`\n_______ Detalles de la Orden #${this.idOrden} _______`);
        console.log(`Total sin IVA: $${this.calcularTotal()}`);
        console.log(`IVA (15%): $${this.calcularImpuestos()}`);
        console.log(`Total con IVA: $${(this.calcularTotal() + this.calcularImpuestos())}`);
        console.log("\nProductos en la orden:");
        for (const producto of this.productos) {
            let precioFinal = producto.precio;
            const descuento = this.descuentos[producto.categoria] || 0;
            precioFinal *= (1 - descuento);
            console.log(`${producto.toString()} - Precio con descuento: $${precioFinal}\n`);
        }
        console.log("___________________________");
    }

    listarProductosPorPrecio() {
        return [...this.productos].sort((a, b) => b.precio - a.precio);
    }
}


let producto1 = new Producto("Pantalon", 200, "Ropa", 10);
let producto2 = new Producto("Telefono", 300, "Electronica", 5);
let producto3 = new Producto("Zapatos", 60, "Calzado", 3);

let orden1 = new Orden();
orden1.establecerDescuento("Electronica", 10); 
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

console.log("Productos ordenados por precio descendente:");
let productosOrdenados = orden1.listarProductosPorPrecio();
productosOrdenados.forEach((producto) => console.log(producto.toString()));
