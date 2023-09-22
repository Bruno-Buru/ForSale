import { Empleado } from '../Empleado';
import { CriterioRanking } from './CriterioRanking';
export class CantOperacionesCerradas implements CriterioRanking{

    mejorEmpleados(empleados: Empleado[]): Empleado {
        let mejorEmpleado:Empleado=empleados[0]

        empleados.forEach(empleado => {
            if(empleado.getCantidadDeOperacionesCerradas() >= mejorEmpleado.getCantidadDeOperacionesCerradas()){
                mejorEmpleado = empleado
            }
            
        });
        return mejorEmpleado
    }

    
}