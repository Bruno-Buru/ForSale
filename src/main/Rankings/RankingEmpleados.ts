import { Empleado } from "../Empleado";
import { CriterioRanking } from "./CriterioRanking";

export class RankingEmpleados{

private criterio:CriterioRanking;

public setCriterio(criterio:CriterioRanking){
    this.criterio=criterio;
}


public mejorEmpleados(empleados:Empleado[]):Empleado{
    return this.criterio.mejorEmpleados(empleados)
}

}