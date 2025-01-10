class Conductor {
    #licencia;
    
    constructor(nombre, licencia) {
        this.nombre = nombre;
        this.#licencia = licencia;
        this.rutas = [];
    }

    registrarRuta(ruta) {
        this.rutas.push(ruta);
        console.log(`Ruta ${ruta.id} registrada para el conductor ${this.nombre}.`);
    }

    mostrarInfo() {
        console.log(`Nombre: ${this.nombre}, Licencia: ${this.#licencia}`);
    }
}

class Vehiculo {
    #placa;

    constructor(modelo, placa) {
        this.modelo = modelo;
        this.#placa = placa;
        this.conductor = null;
    }

    asignarConductor(conductor) {
        this.conductor = conductor;
        console.log(`Vehículo ${this.modelo} con placa ${this.#placa} asignado a ${conductor.nombre}.`);
    }
}

class Ruta {
    #id;

    constructor(id, origen, destino, tiempoEstimado) {
        this.#id = id;
        this.origen = origen;
        this.destino = destino;
        this.tiempoEstimado = tiempoEstimado;
    }
}

class ConductorVIP extends Conductor {
    constructor(nombre, licencia, vehiculoPreferido) {
        super(nombre, licencia);
        this.vehiculoPreferido = vehiculoPreferido;
    }

    asignarVehiculoPreferido(vehiculo) {
        if (vehiculo === this.vehiculoPreferido) {
            console.log(`${this.nombre} ha sido asignado a su vehículo preferido: ${vehiculo.modelo}.`);
        } else {
            console.log(`${this.nombre} tiene un vehículo preferido diferente.`);
        }
    }
}


const conductor1 = new Conductor("Juan Pérez", "ABC123");
conductor1.mostrarInfo();

const vehiculo1 = new Vehiculo("Toyota Prius", "XYZ456");
vehiculo1.asignarConductor(conductor1);

const ruta1 = new Ruta(1, "Centro", "Zona Norte", "30 mins");
conductor1.registrarRuta(ruta1);

const conductorVIP = new ConductorVIP("Ana Gómez", "VIP001", vehiculo1);
conductorVIP.asignarVehiculoPreferido(vehiculo1);
