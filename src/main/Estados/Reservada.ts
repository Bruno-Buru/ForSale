import { Cliente } from "../Cliente";
import { Empleado } from '../Empleado';
import { EstadoOperacion } from "../EstadoOperacion";
import { Operacion } from '../Operacion';
import { Concretado } from './Concretado';

export class Reservada extends EstadoOperacion{
    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        throw new Error("No se puede volver a reservar");
    }
    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
       if(this.clienteQueReservo===cliente){
        operacion.setEstado(new Concretado(empleado,operacion));

       }
       else {
        throw new Error("no se puede concretar porque el cliente no es el mismo que reservo");
       }
    }

    private clienteQueReservo:Cliente;
    private EmpleadoQueReservo:Empleado;

    constructor(cliente:Cliente,empleado:Empleado,operacion:Operacion){
    super();
    this.clienteQueReservo=cliente
    this.EmpleadoQueReservo=empleado
    empleado.agregarOperacionReservada(operacion)
    }

    
}