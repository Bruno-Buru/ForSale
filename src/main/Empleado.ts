import { Operacion } from "./Operacion";
import { Zona } from "./Zona";

export class Empleado{

    private operaciones:Operacion[];
    private cantOperacionesCerradas:number=0;
    private cantOperacionesReservadas:number=0;
    private comisiones:number=0;
    constructor(){
        this.operaciones=[];
    }

    public getCantDeOperacionesReservadas():number{
        return this.cantOperacionesReservadas
    }

    public getCantidadDeOperacionesCerradas():number{
        return this.cantOperacionesCerradas
    }

    public getComisiones():number{
        return this.comisiones
    }

    agregarOperacion(unaOperacion:Operacion){
        if (!this.operaciones.includes(unaOperacion)){
        this.operaciones.push(unaOperacion);
        }
        this.operaciones.push(unaOperacion)
    }

    public agregarOperacionReservada(operacion:Operacion){
        this.agregarOperacion(operacion)
        this.cantOperacionesReservadas++;
    }

    public agregarOperacionConcretada(operacion:Operacion){
        this.agregarOperacion(operacion)
        this.cantOperacionesCerradas++;
        this.comisiones += operacion.comision();
    }



    private operacionesCerradas():Operacion[]{
        return[];
    }


    private obtenerZonasDeOperacionesCerradas():Zona[]{
        return this.operacionesCerradas().map(operacion => operacion.getZona())
    }

    private cerrasteOperacionesEnZonaDe(empleado:Empleado):boolean{
       const zonasDeOperacionesCerradas = this.obtenerZonasDeOperacionesCerradas();
       const zonasDelOtroEmpleado=empleado.obtenerZonasDeOperacionesCerradas();
       return zonasDeOperacionesCerradas.some(unaZona => zonasDelOtroEmpleado.includes(unaZona))

    }

    private primeriasteA(otroEmpleado:Empleado):boolean{

    }

    public vasATenerProblemasConOtro(otroEmpleado:Empleado):boolean{
        return this.cerrasteOperacionesEnZonaDe(otroEmpleado) && this.primeriasteA (otroEmpleado);
    }

}