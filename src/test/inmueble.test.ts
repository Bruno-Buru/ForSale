import { PH } from "../main/PH"
import { Casa } from "../main/Casa"
import { Departamento } from "../main/Departamento";

import { Inmueble } from "../main/Inmueble"

test("probando inmuebles",()=>{
    //const unInmueble=new Inmueble();    no se puede intanciar porque es una clase abtracta


    const unaCasa=new Casa();
    const unPH=new PH();
    const unDepto=new Departamento();



    unaCasa.precioFinal();
    
    unPH.precioFinal();

    unDepto.precioFinal();

})