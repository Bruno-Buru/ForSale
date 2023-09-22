import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { EstadoOperacion } from "../EstadoOperacion";
import { Operacion } from "../Operacion";


export class Concretado extends EstadoOperacion{

    constructor(empleado:Empleado,operacion:Operacion){
        super();
        empleado.agregarOperacionConcretada(operacion)
    }



    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("no se puede reservar porque ya fue concretado");
    }
    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("no se puede volver a concretar porque ya esta concretado");
    }
    
}