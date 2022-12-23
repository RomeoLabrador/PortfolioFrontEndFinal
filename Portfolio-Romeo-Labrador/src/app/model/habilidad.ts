export class Habilidad {
    id?:number;
    nombreH:string;
    descripcionH:string;
    cantidad:number;

    constructor(nombreH:string,descripcionH:string,cantidad:number){
         this.nombreH = nombreH;
         this.descripcionH = descripcionH;
         this.cantidad = cantidad;
    }
}
