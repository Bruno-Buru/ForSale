import { Empleado } from "../Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class CriterioComisiones implements CriterioRanking {

/*
    mejorEmpleados(empleados: Empleado[]):Empleado {
        let comisionMasGrande:number=0
        let empleadoMasGrande:Empleado
    empleados.forEach(empleado => {
      if(empleado.getComisiones()>=comisionMasGrande){
        comisionMasGrande = empleado.getComisiones()
        empleadoMasGrande= empleado
      }
    
      return comisionMasGrande
        
    });*/

    mejorEmpleados(empleados: Empleado[]):Empleado{
        let mejorEmpleado:Empleado=empleados[0]

        empleados.forEach(empleado => {
            if(empleado.getComisiones() >= mejorEmpleado.getComisiones()){
                mejorEmpleado = empleado
            }
            
        });
        return mejorEmpleado
    }
    

    }

    

