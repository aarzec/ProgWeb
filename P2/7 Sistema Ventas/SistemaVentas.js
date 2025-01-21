/****************************************************
            SISTEMA DE VENTAS EN JS
*****************************************************/
//Clase Producto

class Producto {
    static contadorProductos = 0;
    //Modificar static
    //Se utiliza para acceder directamente a traves de la clase

    //Los metodos o propiedades no requieren que se creen instancias de la clase para ser utilizados
    //Se pueden acceder directamente desde la clase
    constructor(nombre, precio, stock, categoria){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
        this.categoria = categoria;
    }

    getIdProducto(){
        return this.idProducto;
    } 

    getNombre(){
        return this.nombre;
    }
    setNombre(nombre){
        this.nombre = nombre;
    }

    getPrecio(){
        return this.precio;
    }

    setPrecio(precio){
        this.precio = precio;
    }

    toString(){
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: ${this.precio}, stock: ${this.stock}, categoría: ${this.categoria}`;
    }
}

//Creación de la clase orden

class Orden{
    static contadorOrdenes = 0;
    static get  MAX_PRODUCTOS(){ //Cuando se trabaja con constantes se debe utilizar mayúsculas
        return 5; 

    }

    constructor(){
        this.idOrden = ++Orden.contadorOrdenes;
        this.productos = [];
        this.contadorProductosAgregados = 0;
    }

    getIdOrden(){
        return this.idOrden;
    }

    agregarProducto(producto){
        //Verificar si no hemos superado el maximo de productos existentes
        if (this.productos.length >= Orden.MAX_PRODUCTOS){
            console.log("No se pueden agregar más productos a la orden");
            return;
        }

        // Validación stock
        if (producto.stock <= 0) {
            console.log("No hay stock del producto");
            return;
        }

        producto.stock--;
        this.productos.push(producto);
    }

    calcularTotal(){
        let totalVenta = 0;
        for(const producto of this.productos){
            totalVenta += producto.precio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = "";
        for(const producto of this.productos){
            productosOrden += `\n ${producto.toString()}\n`;
        }
        console.log(`Orden: ${this.idOrden}, Total: $ ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }

    descuentoCategoria(categoria, porcentaje){
        for(const producto of this.productos){
            if(producto.categoria === categoria){
                let descuento = producto.precio * porcentaje / 100;
                producto.precio -= descuento;
            }
        }
    }
}

let producto1 = new Producto("Pantalon", 200, 50, "Ropa");
let producto2 = new Producto("Teléfono", 300, 30, "Electrónica");
console.log(producto1);
console.log(producto2);


let orden1 = new Orden(); //Objeto de la clase Orden
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Zapatos", 60, 50, "Calzado");
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);  
orden2.agregarProducto(producto3);  
orden2.agregarProducto(producto3);  
orden2.mostrarOrden();

orden2.descuentoCategoria("Electrónica", 10);

//Descuentos por categoría

//Crear una propiedad categoria en la clase Producto
//Los productos de la categoria electronica debe tener un descuento del 10% al calcular el total de su venta

//Implementar un método calcularImpuestos() que calcule el 15% de impuestos sobre el total de la venta

//Listar productos por precio descendente

//Asegurarse que los precios no pueden ser negativos al establecerlos en la clase producto.








//************************************************
class Calculadora{
    //Método estático
    static sumar(a, b){
        return a + b;
    }
}

//Acceso al método estático directamente desde la clase
console.log(Calculadora.sumar(2, 3));

//No se puede acceder directamente desde la instancia
const calc = new Calculadora();
//console.log(calc.sumar()); //Undefined


class Contador{
    static totalInstancias = 0;
    constructor(){
        Contador.totalInstancias++;

    }
    static mostrarInstancias(){
        return `Se ha creado ${Contador.totalInstancias} instancias`;
    }
}

const contador1 = new Contador();
const contador2 = new Contador();
console.log(Contador.mostrarInstancias()); //Se ha creado 2 instancias


