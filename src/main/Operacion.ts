import { Cliente } from "./Cliente";
import { Empleado } from "./Empleado";
import { EstadoOperacion } from "./EstadoOperacion";
import { Publicado } from "./Estados/Publicado";
import { Inmueble } from "./Inmueble";
import { Zona } from "./Zona";

export abstract class Operacion{

protected inmueble:Inmueble;
private estado:EstadoOperacion;


constructor(){
    this.estado=new Publicado()
}

public getZona():Zona{
    return this.inmueble.getZona()
}

public setEstado(unEstado:EstadoOperacion){
    this.estado=unEstado;
}

public getEstado():EstadoOperacion{
    return this.estado;
}

public abstract comision(): number;

public  reservar(cliente:Cliente,empleado:Empleado):void{
    this.estado.reservar(cliente,empleado,this)

}

public  concretar(cliente:Cliente,empleado:Empleado):void{
    this.estado.concretar(cliente,empleado,this)

}





}