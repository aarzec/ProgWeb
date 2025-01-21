/******************
            SISTEMA DE VENTAS EN JS
*******************/
//Clase Producto
class Producto {
    static contadorProductos = 0;
    //Modificar static
    //Se utiliza para acceder directamente a traves de la clase

    //Los metodos o propiedades no requieren que se creen instancias de la clase para ser utilizados
    //Se pueden acceder directamente desde la clase
    constructor(nombre, precio){
        this.idProducto = ++Producto.contadorProductos;
        this.nombre = nombre;
        this.precio = precio;
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

    toString() {
        return `idProducto: ${this.idProducto}, nombre: ${this.nombre}, precio: $ ${this.precio}`;
    }
}

let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Vestido", 300);
console.log(producto1);
console.log(producto2);


//****************
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

class Orden{
    static contadorOrdenes = 0;
    
    static get MAX_PRODUCT(){     //cuando se trabaja con constantes se recomienda crear en mayusculas
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = {};
        this._contadorProductosAgregados = 0;
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarProductos(producto){
        //Verificar si no hemos superado el maximo de productos existentes
        if (this_productos.length < Orden.MAX_PRODUCT) {
            this._productos.push(producto);
            //Otra sintaxis
            //this._productos[this._contadorProductosAgregados++] = producto
        } else {
            console.log(`No se puede agregar mas productos a la Orden`);
        }
    }
    
    mostrarOrden() {
        
    }
}
