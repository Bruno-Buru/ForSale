import { Empleado } from "../Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class CantOperacionesReservadas implements CriterioRanking{
    mejorEmpleados(empleados: Empleado[]): Empleado {
        let mejorEmpleado:Empleado=empleados[0]

        empleados.forEach(empleado => {
            if(empleado.getCantDeOperacionesReservadas() >= mejorEmpleado.getCantDeOperacionesReservadas()){
                mejorEmpleado = empleado
            }
            
        });
        return mejorEmpleado
    }



}