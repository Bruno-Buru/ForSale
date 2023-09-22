import { Cliente } from "../Cliente";
import { Empleado } from "../Empleado";
import { EstadoOperacion } from "../EstadoOperacion";
import { Operacion } from "../Operacion";
import { Concretado } from "./Concretado";
import { Reservada } from "./Reservada";


export class Publicado extends EstadoOperacion{
    public reservar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
       operacion.setEstado(new Reservada(cliente,empleado,operacion))
    }
    public concretar(cliente: Cliente, empleado: Empleado, operacion: Operacion): void {
        operacion.setEstado(new Concretado(empleado,operacion))
    }

    

   
    
}