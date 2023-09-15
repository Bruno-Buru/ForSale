import { Operacion } from "./Operacion";

export class Venta extends Operacion{

    private static porcentajeComision:number=1.5;


    public static setPorcentaje(unPorcentaje:number){ //se hace un static set
        Venta.porcentajeComision=unPorcentaje
    }

    public comision(): number {
        return this.inmueble.precioFinal()*Venta.porcentajeComision;
    }
    
}