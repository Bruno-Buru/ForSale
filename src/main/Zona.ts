export class Zona{

    private nombre:string;
    private valor:number;


    public setNombre(unNonmbre:string){
        this.nombre=unNonmbre
    }

    public getNombre():string{
        return this.nombre

    }


    public setValor(unValor:number){
        this.valor=unValor
    }

    public getValor():number{
        return this.valor
    }

}