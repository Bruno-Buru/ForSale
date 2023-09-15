import { Operacion } from "./Operacion";
import { Zona } from "./Zona";



export abstract class  Inmueble{

    protected metros2:number;
    protected cantAmbientes:number;
    private zona:Zona;
    private operacion:Operacion;

    public getOperacion():Operacion{
        return this.operacion
    }

    public setZona(unaZona:Zona){
        this.zona=unaZona
    }

    public getZona():Zona{
        return this.zona
    }

    public setMetros2(unMetro:number){
        this.metros2=unMetro
    }

    public getMetro2():number{
        return this.metros2
    }


    /*public precio():number{


        return 0
    }
*/

    public precioFinal():number{
        return this.precio()+this.zona.getValor();
    }



    protected abstract precio():number;

}




