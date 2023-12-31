import { Operacion } from "./Operacion";

export class Alquiler extends Operacion{

    private cantMeses: number;

    public setCantMeses(cant:number){
        this.cantMeses=cant;
    }

    public getCantMeses():number{
        return this.cantMeses
    }

    public comision(): number {
        return (this.cantMeses*super.inmueble.precioFinal())/50000;
    }
    

}